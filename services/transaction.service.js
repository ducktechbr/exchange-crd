/**
 * -------------------
 * Transaction Service
 * -------------------
 * @author codethebasics by DuckTech
 */
const TRANSACTION_URI = process.env.NEXT_PUBLIC_CRD_PROXY_API_TRANSACTION;

async function getTransaction(userId) {
    const transactionList = await fetch(TRANSACTION_URI, {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId,
            limit: 10,
        }),
    }).then((response) => response.json());

    return transactionList.response;
}

async function getCRDBalance(userId) {
    const activeId = 1;
    const typeTransactionId = 6;
    const statusTransactionTypeId = 3;
    const crdBalance = await fetch(TRANSACTION_URI + '/balance', {
        method: 'POST',
        body: JSON.stringify({
            user_id: parseInt(userId),
            active_id: activeId,
            type_transaction_id: typeTransactionId,
            status_transaction_type_id: statusTransactionTypeId,
        }),
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return crdBalance.response.api.data[0].total || 0;
}

async function getSTKBalance(userId) {
    const activeId = 2;
    const typeTransactionId = 6;
    const statusTransactionTypeId = 3;
    const stkBalance = await fetch(TRANSACTION_URI + '/balance', {
        method: 'POST',
        body: JSON.stringify({
            user_id: parseInt(userId),
            active_id: activeId,
            type_transaction_id: typeTransactionId,
            status_transaction_type_id: statusTransactionTypeId,
        }),
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return stkBalance.response.api.data[0].total || 0;
}

async function getBRLBalance(userId) {
    const activeId = 3;
    const typeTransactionId = 6;
    const statusTransactionTypeId = 3;
    const brlBalance = await fetch(TRANSACTION_URI + '/balance', {
        method: 'POST',
        body: JSON.stringify({
            user_id: parseInt(userId),
            active_id: activeId,
            type_transaction_id: typeTransactionId,
            status_transaction_type_id: statusTransactionTypeId,
        }),
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return brlBalance.response.api.data[0].total || 0;
}

async function postTransaction(transaction) {
    transaction.action = 'addNewTransaction';
    const savedTransaction = await fetch(TRANSACTION_URI + '/new', {
        method: 'POST',
        body: JSON.stringify(transaction),
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return savedTransaction;
}

async function putTransaction() {
    const updatedTransaction = await fetch(TRANSACTION_URI, {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return updatedTransaction.response;
}

async function deleteTransaction() {
    const deletedTransaction = await fetch(TRANSACTION_URI, {
        method: 'DELETE',
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    return deletedTransaction.response;
}

/**
 * -----------------
 * Verify Pix status
 * -----------------
 */
async function verifyPaymentPix(txid_id) {
    const pixPayment = await fetch(TRANSACTION_URI + '/pix', {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ txid_id: txid_id }),
    }).then((response) => response.json());

    return pixPayment.response.status;
}

export {
    getTransaction,
    postTransaction,
    putTransaction,
    deleteTransaction,
    getCRDBalance,
    getSTKBalance,
    getBRLBalance,
    verifyPaymentPix,
};
