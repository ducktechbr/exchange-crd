import styles from '../../styles/pages/Stacks.module.scss';
import Card from '/components/cards/Card';
import Router from 'next/router';
import { BalanceCard } from '../../components/cards';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { BuyContext } from '../../contexts/BuyContext';
import { postTransaction } from '../../services/transaction.service';
import {
    getCRDBalance,
    getSTKBalance,
    getBRLBalance,
    verifyPaymentPix,
} from '../../services/transaction.service';

export default function Stacks(props) {
    const { user } = useContext(AuthContext);

    const { buyValue, setBuyValue } = useContext(BuyContext);
    const [buyExtraValue, setBuyExtraValue] = useState(0);
    const [qrCode, setQrCode] = useState('');
    const [pixCopiaCola, setPixCopiaCola] = useState('');
    const [qrCodeValor, setQrCodeValor] = useState('');
    const [qrCodeCriacao, setQrCodeCriacao] = useState('');
    const [qrCodeExpiracao, setQrCodeExpiracao] = useState(0);
    const [qrCodeChave, setQrCodeChave] = useState('');
    const [qrCodeStatus, setQrCodeStatus] = useState('');
    const [txid, setTxid] = useState('');
    const [intervalId, setIntervalId] = useState('');

    const [crdBalance, setCrdBalance] = useState(0);
    const [stkBalance, setStkBalance] = useState(0);
    const [brlBalance, setBrlBalance] = useState(0);

    useEffect(() => {
        if (!user) {
            Router.push('/login');
        }
        props.setPaths(['Home', 'Stacks']);
        setBuyValue(parseFloat(buyValue));
        setBuyExtraValue(parseFloat(buyValue) + buyValue * 0.3);

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

    const comprarStacks = async () => {
        const qrCodeData = await postTransaction({
            user_id: parseInt(user.id),
            amount: buyValue.toFixed(2),
            active_id: parseInt(2),
        });
        setQrCode(qrCodeData.response.api.data.qr_code);
        setPixCopiaCola(qrCodeData.response.api.data.copia_e_cola);
        setQrCodeValor(qrCodeData.response.api.data.pix.valor.original);
        setQrCodeCriacao(qrCodeData.response.api.data.pix.calendario.criacao);
        setQrCodeExpiracao(
            qrCodeData.response.api.data.pix.calendario.expiracao
        );
        setQrCodeChave(qrCodeData.response.api.data.pix.chave);
        setQrCodeStatus(qrCodeData.response.api.data.pix.status);
        setTxid(qrCodeData.response.api.data.txid);

        const intervalId = setInterval(async () => {
            let pix = await verifyPaymentPix(qrCodeData.response.api.data.txid);
            console.log(pix);
            if (pix === 'CONCLUIDA') {
                clearInterval(intervalId);
                Router.push('/extrato');
            }
        }, 5000);
    };

    const copiarChavePix = async () => {
        navigator.clipboard.writeText(pixCopiaCola);
    };

    const displayQRCode = () => {
        if (qrCode) {
            return (
                <div className={styles.qrCode}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <div></div>
                            <div>
                                <img
                                    height={15}
                                    src="/img/times-black.svg"
                                    onClick={() => setQrCode(undefined)}
                                />
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div>
                                <div className={styles.logo}>
                                    <img src="/img/logo_CRD.png" height={25} />
                                </div>
                                <div className={styles.headerLabel}>
                                    <span>
                                        Leia o QRCode pelo seu aplicativo
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={qrCode} />
                            </div>
                            <div>
                                <span>
                                    Para usar o "Pix Copia e Cola" copie o
                                    código e cole para completar a transação.
                                </span>
                            </div>
                            <div>
                                <div>
                                    <label>Valor da compra:</label>
                                </div>
                                <div>
                                    <label>R$ {qrCodeValor}</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>QRCode expira em:</label>
                                </div>
                                <div>
                                    <label>{qrCodeExpiracao / 60} min</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div onClick={copiarChavePix}>
                                <label>Copia e cola pix</label>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className={styles.stacksContainer}>
            <div className={styles.header}>Escritório Virtual</div>
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
                <Card background={'#04042D'} color={'#FFFFFF'} padding={'15px'}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <img height={35} src="/img/white-cart.svg" />
                        </div>
                        <div className={styles.label}>Comprar token STK</div>
                    </div>
                    <div className={styles.steps}>
                        <div className={styles.step1Container}>
                            <Card
                                background={'#FFFFFF'}
                                color={'#D6A84C'}
                                padding={'15px'}
                            >
                                <div className={styles.header}>
                                    <Card
                                        background={'#D6A84C'}
                                        color={'#FFFFFF'}
                                        padding={'15px'}
                                    >
                                        <span>PASSO 1</span>
                                    </Card>
                                    <div>
                                        <span>QUANTIDADE</span>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <p>
                                        Digite o valor que desja contribuir e
                                        calcule a quantidade de stacks que você
                                        receberá.
                                    </p>
                                    <p>
                                        A calculadora irá ajuda-lo a converter a
                                        moeda em Stacks.
                                    </p>
                                </div>
                                <div className={styles.form}>
                                    <div className={styles.left}>
                                        <div>
                                            <span>Valor de Compra:</span>
                                            <div className={styles.inputValue}>
                                                <span>R$</span>
                                                <input
                                                    disabled
                                                    type="number"
                                                    min="0"
                                                    step=".1"
                                                    value={buyValue}
                                                    onChange={(e) =>
                                                        setBuyValue(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.header}>
                                            <span>Quantidade Stacks:</span>
                                        </div>
                                        <div className={styles.bonusContainer}>
                                            <div className={styles.bonusLabel}>
                                                <Card
                                                    background={'#D6A84C'}
                                                    color={'#FFFFFF'}
                                                    padding={'5px 15px'}
                                                >
                                                    <span>+30% Bônus</span>
                                                </Card>
                                            </div>
                                            <div
                                                className={styles.discountLabel}
                                            >
                                                <div>
                                                    <span>
                                                        {Math.trunc(
                                                            Math.round(
                                                                buyValue
                                                            ) / 0.0006738
                                                        )}
                                                    </span>
                                                    <span>STK</span>
                                                </div>
                                                <div>
                                                    <span>
                                                        {Math.trunc(
                                                            Math.round(
                                                                buyExtraValue
                                                            ) / 0.0006738
                                                        )}
                                                    </span>
                                                    <span>STK</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div>
                                        <img
                                            height="15"
                                            src="/img/gold-info.svg"
                                        />
                                        <span>
                                            Valor calculado com base no preço
                                            inicial das stacks.
                                        </span>
                                    </div>
                                    <div>
                                        <img
                                            height="15"
                                            src="/img/gold-info.svg"
                                        />
                                        <span>
                                            Valor mínimo de compra R$ 100,00
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.step2Container}>
                            <Card
                                background={'#FFFFFF'}
                                color={'#D6A84C'}
                                padding={'15px'}
                            >
                                <div className={styles.header}>
                                    <Card
                                        background={'#D6A84C'}
                                        color={'#FFFFFF'}
                                        padding={'15px'}
                                    >
                                        <span>PASSO 2</span>
                                    </Card>
                                    <div>
                                        <span>PAGAMENTO</span>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <p>
                                        Para receber suas Stacks faça o
                                        pagamento. Você pode fazer um pagamento
                                        diretamente para o nosso endereço de
                                        pagamento ou pagar online. Após o
                                        pagamento, você receberá um e-mail de
                                        confirmação.
                                    </p>
                                </div>
                                <div className={styles.cta}>
                                    <button onClick={comprarStacks}>
                                        Efetuar Pagamento
                                    </button>
                                </div>
                                <div className={styles.info}>
                                    <div>
                                        <img
                                            height="15"
                                            src="/img/gold-info.svg"
                                        />
                                        <span>
                                            As Stacks apareceção em sua conta
                                            depois que seu pagamento for
                                            efetuado e revisado por nossa
                                            equipe.
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Card>
                {displayQRCode()}
            </div>
        </div>
    );
}
