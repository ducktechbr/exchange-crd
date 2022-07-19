import { useEffect, useState, useContext } from 'react';
import styles from '/styles/layout/home/BuyStacks.module.scss';
import Card from '../../cards/Card';
import Router from 'next/router';
import { BuyContext } from '../../../contexts/BuyContext';

export default function BuyStacks(props) {
    //0.0006738
    const [previewInput, setPreviewInput] = useState(0);
    const [previewValue, setPreviewValue] = useState(0);
    const [bonus, setBonus] = useState(0.3);

    const { buyValue, setBuyValue } = useContext(BuyContext);

    useEffect(() => {}, []);

    const onPreviewInputChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            setPreviewInput(value);
            setPreviewValue(Math.round(buyValue) / 0.0006738);
        }
    };

    const comprarStacks = async () => {
        // alert('Comprar STACKS: ' + previewValue);
        Router.push('/stacks');
    };

    return (
        <Card background={'#FFFFFF'} color={'#D6A84C'} padding={'15px'}>
            <div className={styles.buyStacks}>
                <div className={styles.header}>
                    <div className={styles.img}>
                        <img src="/img/gold-cart.svg" />
                    </div>
                    <div className={styles.headerLabel}>Comprar Stacks</div>
                </div>
                <div className={styles.label}>
                    <span>
                        Adicione a quantidade em reais que deseja comprar.
                    </span>
                </div>
                <div className={styles.quantityContainer}>
                    <div className={styles.inputQuantity}>
                        <span>R$</span>
                        <input
                            type="number"
                            step="1"
                            min="100"
                            value={buyValue}
                            onChange={(e) => setBuyValue(e.target.value)}
                        />
                    </div>
                    <div className={styles.outputQuantity}>
                        {' '}
                        = {Math.trunc(Math.round(buyValue) / 0.0006738)} STK
                    </div>
                </div>
                <div className={styles.info}>
                    <span>
                        Valor calculado com base no preço inicial das stacks.
                    </span>
                </div>
                <div className={styles.cta}>
                    <button onClick={comprarStacks}>Comprar Stacks</button>
                </div>
            </div>
        </Card>
    );
}
