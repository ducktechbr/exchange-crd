import { useState } from 'react';
import styles from '/styles/layout/home/WithdrawCRD.module.scss';
import Card from '../../cards/Card';

export default function Withdraw(props) {
    const resgatarTokens = async () => {
        alert('Resgatar Tokens');
    };

    return (
        <Card background={'#FFFFFF'} color={'#D6A84C'} padding={'15px'}>
            <div className={styles.sacarStacks}>
                <div className={styles.label}>
                    <span>Resgatar CRD Tokens</span>
                </div>
                <div className={styles.cta}>
                    <button onClick={resgatarTokens}>Sacar Tokens</button>
                </div>
            </div>
        </Card>
    );
}
