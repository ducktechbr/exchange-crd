const FormData = require('form-data');

export default async function transactionBalance(req, res) {
    const action = 'getTransactionsReport';
    const user_id = req.body.user_id;
    const active_id = req.body.active_id;
    const type_transaction_id = req.body.type_transaction_id;
    const status_transaction_type_id = req.body.status_transaction_type_id;

    if (req.method === 'POST') {
        const form = new FormData();
        form.append('action', action);
        form.append('chave_key', process.env.API_KEY);
        form.append('user_id', user_id);
        form.append('active_id', active_id);
        form.append('type_transaction_id', type_transaction_id);
        form.append('status_transaction_type_id', status_transaction_type_id);

        try {
            const balance = await fetch(process.env.CRD_API, {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                body: form,
            }).then((response) => response.json());

            res.status(200).json({
                response: {
                    message: 'Saldo obtido com sucesso.',
                    api: balance,
                },
            });
        } catch (error) {
            res.status(400).json({});
        }
    } else {
        res.status(500).json({ message: 'Method not allowed' });
    }
}
