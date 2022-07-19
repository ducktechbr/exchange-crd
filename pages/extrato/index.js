import Router from 'next/router';
import Card from '../../components/cards/Card';
import Transaction from '../../components/layout/Home/Transactions';
import styles from '../../styles/pages/Extrato.module.scss';
import { useEffect, useContext, useState } from 'react';
import { BalanceCard } from '../../components/cards';
import { AuthContext } from '../../contexts/AuthContext';
import {
    getCRDBalance,
    getSTKBalance,
    getBRLBalance,
} from '../../services/transaction.service';

export default function Extrato(props) {
    const { user } = useContext(AuthContext);

    const [crdBalance, setCrdBalance] = useState(0);
    const [stkBalance, setStkBalance] = useState(0);
    const [brlBalance, setBrlBalance] = useState(0);

    useEffect(() => {
        if (!user) {
            Router.push('/login');
        }
        props.setPaths(['Home', 'Extrato']);

        const fetchData = async () => {
            const crd = parseFloat(await getCRDBalance(user.id));
            const stk = parseFloat(await getSTKBalance(user.id));
            const brl = parseFloat(await getBRLBalance(user.id));

            setCrdBalance(crd);
            setStkBalance(stk);
            setBrlBalance(brl);
        };

        fetchData()
            .then((response) => console.log('response', response))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={styles.extrato}>
            <div className={styles.banner}>
                <span>Extrato</span>
            </div>
            <div className={styles.balanceContainer}>
                <BalanceCard
                    background={'#D6A84C'}
                    color={'#FFFFFF'}
                    padding={'15px'}
                    img={'/img/white-wallet.svg'}
                    label={'Saldo em CRD'}
                    balance={crdBalance}
                    symbol={'CRD'}
                />
                <BalanceCard
                    background={'#FFFFFF'}
                    color={'#222222'}
                    padding={'15px'}
                    img={'/img/gold-coin.svg'}
                    label={'Saldo em STACKS'}
                    balance={stkBalance}
                    symbol={'STK'}
                />
                <BalanceCard
                    background={'#FFFFFF'}
                    color={'#222222'}
                    padding={'15px'}
                    img={'/img/gold-dolar.svg'}
                    label={'Saldo em REAIS'}
                    balance={brlBalance.toFixed(2)}
                    symbol={'R$'}
                />
            </div>
            <div className={styles.historyContainer}>
                <Card background={'#FFFFFF'} color={'#222222'} padding={'15px'}>
                    <div className={styles.history}>
                        <div className={styles.header}>
                            <div>
                                <span className={styles.label}>
                                    Histórico de transações
                                </span>
                                <span>{' > '}</span>
                                <span>
                                    <Card
                                        background="#D6A84C"
                                        color="#FFFFFF"
                                        padding="5px 15px"
                                    >
                                        Extrato
                                    </Card>
                                </span>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        Não está visualizando sua transação?
                                    </span>
                                    <span>Clique aqui</span>
                                </div>
                                <div>
                                    <span>Extrato Histórico de Transações</span>
                                    <span>
                                        <img src="/img/export-gold.svg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.calendar}>
                                <div className={styles.filter}>
                                    <div>
                                        <span>Tipo</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <span>Data</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <span>Ativo</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <span>Status</span>
                                        <span>
                                            <img src="/img/caret-down-black.svg" />
                                        </span>
                                    </div>
                                    <div>
                                        <img src="/img/time-calendar-gold.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.table}>
                                <Transaction userId={user?.id} />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={styles.extractContainer}>
                <Card background={'#FFFFFF'} color={'#222222'} padding={'15px'}>
                    <div className={styles.extract}>
                        <div className={styles.header}>
                            <div>
                                <span className={styles.label}>
                                    Histórico de transações
                                </span>
                                <span>{' > '}</span>
                                <span>
                                    <Card
                                        background="#D6A84C"
                                        color="#FFFFFF"
                                        padding="5px 15px"
                                    >
                                        Extrato
                                    </Card>
                                </span>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        Não está visualizando sua transação?
                                    </span>
                                    <span>Clique aqui</span>
                                </div>
                                <div>
                                    <span>Exportar extrato</span>
                                    <span>
                                        <img src="/img/export-gold.svg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div>
                                <span className={styles.label}>
                                    Detalhes da operação
                                </span>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>STATUS:</td>
                                            <td>CONCLUÍDA</td>
                                        </tr>
                                        <tr>
                                            <td>HORA:</td>
                                            <td>16H32</td>
                                        </tr>
                                        <tr>
                                            <td>DATA:</td>
                                            <td>20/06/2022</td>
                                        </tr>
                                        <tr>
                                            <td>ATIVO:</td>
                                            <td>STACK-STK</td>
                                        </tr>
                                        <tr>
                                            <td>QUANTIDADE:</td>
                                            <td>400</td>
                                        </tr>
                                        <tr>
                                            <td>ID.SMART:</td>
                                            <td>013213</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
