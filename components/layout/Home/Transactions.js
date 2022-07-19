import { useEffect, useState } from 'react';
import styles from '/styles/layout/home/Transactions.module.scss';
import Card from '../../cards/Card';
import Router from 'next/router';
import {
    getTransaction,
    postTransaction,
    putgetTransaction,
    deleteTransaction,
} from '../../../services/transaction.service';

export default function Transaction(props) {
    useEffect(() => {
        getTransaction(props.userId)
            .then((response) => setTransactions(response.transactionList))
            .catch((error) => console.log(error));
    }, []);

    const [transactions, setTransactions] = useState([]);

    const listTransactions = async () => {
        Router.push('/extrato');
    };

    const viewTransaction = async () => {
        alert('View transaction');
    };

    const transactionClass = () => {
        return 'warningLabel';
    };

    return (
        <Card background={'#FFFFFF'} color={'#D6A84C'} padding={'15px'}>
            <div className={styles.transactionContainer}>
                <div className={styles.header}>
                    <div className={styles.img}>
                        <img src="/img/gold-paper.svg"></img>
                    </div>
                    <div className={styles.label}>
                        <span>Últimos lançamentos</span>
                    </div>
                </div>
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>ATIVO</th>
                                <th>TIPO</th>
                                <th>QUANTIDADE</th>
                                <th>DATA/HORA</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions?.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.name_active}</td>
                                    <td>{transaction.type_transaction}</td>
                                    <td>{transaction.qtd_active}</td>
                                    <td>{transaction.transaction_date}</td>
                                    <td>
                                        <span
                                            className={
                                                styles[transaction.class]
                                            }
                                        >
                                            {transaction.status_transaction}
                                        </span>
                                    </td>
                                    <td>
                                        <img
                                            className={styles.transactionInfo}
                                            onClick={viewTransaction}
                                            height={20}
                                            src="/img/search-gray.svg"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.cta}>
                    <button onClick={listTransactions}>
                        VER TODAS AS TRANSAÇÕES
                    </button>
                </div>
            </div>
        </Card>
    );
}
