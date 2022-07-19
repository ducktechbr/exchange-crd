const FormData = require('form-data');

/**
 * --------
 * New User
 * --------
 */
export default async function addNewUser(req, res) {
    const action = 'addNewUser';
    const chave_key = process.env.API_KEY;
    const level_id = 2;
    const document_type_id = parseInt(req.body.document_type_id);
    const document_user = req.body.document_user;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const whatsapp = req.body.whatsapp;
    const uf = req.body.uf;
    const city = req.body.city;

    try {
        const form = new FormData();
        form.append('action', action);
        form.append('chave_key', chave_key);
        form.append('level_id', level_id);
        form.append('document_type_id', document_type_id);
        form.append('document_user', document_user);
        form.append('name', name);
        form.append('email', email);
        form.append('password', password);
        form.append('whatsapp', whatsapp);
        form.append('uf', uf);
        form.append('city', city);

        const newUserResponse = await fetch(process.env.CRD_API, {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,
        });

        res.status(200).json({
            response: await newUserResponse.json(),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            response: {
                message: 'Erro ao cadastrar novo usuário',
            },
        });
    }
}
