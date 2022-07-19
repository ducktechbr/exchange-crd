const $ = require('jquery');
const jwt = require('jsonwebtoken');
const FormData = require('form-data');

export default async function authenticationHandler(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (req.method === 'POST') {
        if (!username || !password) {
            res.status(400).json({
                response: {
                    message: 'Username/Password must be sent',
                },
            });
        } else {
            const form = new FormData();
            form.append('action', 'getDataUser');
            form.append('chave_key', process.env.API_KEY);
            form.append('email', username);
            form.append('password', password);

            try {
                const response = await fetch(process.env.CRD_API, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'default',
                    body: form,
                });

                if (response) {
                    const jsonResponse = await response.json();
                    const user = jsonResponse.data[0];
                    const KEY = process.env.API_SECRET;

                    if (user) {
                        const token = jwt.sign(
                            {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                level_id: user.level_id,
                                document_user: user.document_user,
                                uf: user.uf,
                                city: user.city,
                                ip_conect: user.ip_conect,
                            },
                            KEY
                        );

                        res.status(200).json({
                            response: {
                                token: token,
                                user: user,
                            },
                        });
                    } else {
                        res.status(400).json({
                            response: {
                                message: 'Authentication failed.',
                            },
                        });
                    }
                }
            } catch (error) {
                console.log('error ===>', error);
            }
        }
    } else {
        res.status(500).json({ message: 'Method Not Allowed.' });
    }
}
