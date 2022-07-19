import { useState } from 'react';
import styles from '/styles/layout/home/WhitepaperCRD.module.scss';
import Card from '../../cards/Card';

export default function WhitepaperCRD(props) {
    const baixarWhitepaper = async () => {
        window.open('https://crddao.io/whitepapper/', '_blank');
    };

    return (
        <Card background={'#FFFFFF'} color={'#D6A84C'} padding={'15px'}>
            <div className={styles.infoStacks}>
                <div className={styles.label}>
                    <span>Entenda como o token CRD funciona</span>
                </div>
                <div className={styles.cta}>
                    <button onClick={baixarWhitepaper}>
                        Baixar whitepaper CRD
                    </button>
                </div>
            </div>
        </Card>
    );
}
