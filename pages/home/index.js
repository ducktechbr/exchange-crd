import styles from '../../styles/pages/Home.module.scss';
import Transactions from '../../components/layout/Home/Transactions';
import BuyStacks from '../../components/layout/Home/BuyStacks';
import WhitepaperCRD from '../../components/layout/Home/WhitepaperCRD';
import WithdrawCRD from '../../components/layout/Home/WithdrawCRD';
import {
    getCRDBalance,
    getSTKBalance,
    getBRLBalance,
} from '../../services/transaction.service';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BalanceCard } from '../../components/cards';

export default function Home(props) {
    const { user } = useContext(AuthContext);

    const [crdBalance, setCrdBalance] = useState(0);
    const [stkBalance, setStkBalance] = useState(0);
    const [brlBalance, setBrlBalance] = useState(0);

    useEffect(() => {
        if (!user) {
            Router.push('/login');
        }
        props.setPaths(['Home']);

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
        <div className={styles.home}>
            <div className={styles.banner}>
                <span>Escritório Virtual</span>
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
            <div className={styles.formContainer}>
                <div className={styles.leftContainer}>
                    <Transactions userId={user?.id} />
                </div>
                <div className={styles.right}>
                    <BuyStacks />
                    <WhitepaperCRD />
                    <WithdrawCRD />
                </div>
            </div>
        </div>
    );
}
