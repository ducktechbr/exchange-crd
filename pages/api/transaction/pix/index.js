const FormData = require('form-data');

export default async function verifyPaymentPix(req, res) {
    const action = 'verifyPaymentPix';
    const txid_id = req.body.txid_id;

    if (req.method === 'POST') {
        try {
            const form = new FormData();
            form.append('action', action);
            form.append('chave_key', process.env.API_KEY);
            form.append('txid_id', txid_id);

            const pixStatus = await fetch(process.env.CRD_API, {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                body: form,
            }).then((response) => response.json());

            res.status(200).json({
                response: {
                    status: pixStatus.data,
                },
            });
        } catch (error) {
            res.status(500).json({
                response: {
                    message: 'Erro durante a criação da transação',
                },
            });
        }
    }
}
