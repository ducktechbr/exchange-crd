const FormData = require('form-data');

export default async function transactionHandler(req, res) {
    const form = new FormData();
    form.append('action', 'getTransactionsUser');
    form.append('chave_key', process.env.API_KEY);
    form.append('user_id', req.body.user_id);
    form.append('limit', req.body.limit);

    try {
        const transactionList = await fetch(process.env.CRD_API, {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,
        }).then((response) => response.json());

        res.status(200).json({
            response: {
                transactionList: transactionList.data,
            },
        });
    } catch (error) {
        res.status(200).json({
            response: {
                message: error,
            },
        });
    }
    // switch (req.method) {
    //     case 'GET':
    //         handleGET(req, res);
    //         break;
    //     case 'POST':
    //         handlePOST(req, res);
    //         break;
    //     case 'PUT':
    //         handlePUT(req, res);
    //         break;
    //     case 'DELETE':
    //         handleDELETE(req, res);
    //         break;
    //     default:
    //         res.status(400).json({
    //             response: { message: 'method not allowed' },
    //         });
    // }
}

/**
 * ---
 * GET
 * ---
 */
async function handleGET(req, res) {
    const form = new FormData();
    form.append('action', 'getTransactionsUser');
    form.append('chave_key', process.env.API_KEY);
    form.append('user_id', req.user_id);

    try {
        const response = await fetch(process.env.CRD_API, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            body: form,
        });

        console.log('handleGet', response);
    } catch (error) {
        console.log('error ===>', error);
    }

    res.status(200).json({
        response: {
            message: 'GET',
        },
    });
}

/**
 * ----
 * POST
 * ----
 */
async function handlePOST(req, res) {
    const form = new FormData();
    form.append('action', 'getTransactionsUser');
    form.append('chave_key', process.env.API_KEY);
    form.append('user_id', req.user_id);

    console.log('handlePOST');

    try {
        const response = await fetch(process.env.CRD_API, {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,
        });

        res.status(200).json({
            response: {
                response: response,
            },
        });
    } catch (error) {
        res.status(200).json({
            response: {
                message: error,
            },
        });
    }
}

/**
 * ---
 * PUT
 * ---
 */
function handlePUT(req, res) {
    res.status(200).json({
        response: {
            message: 'PUT',
        },
    });
}

/**
 * ------
 * DELETE
 * ------
 */
function handleDELETE(req, res) {
    res.status(200).json({
        response: {
            message: 'DELETE',
        },
    });
}
