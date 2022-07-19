import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import styles from '../../../styles/components/Sidebar.module.scss';

export default function Sidebar(props) {
    const { user } = useContext(AuthContext);

    useEffect(() => {}, []);

    const userLoggedInMenu = () => {
        return (
            <>
                <div className={styles.userData}>
                    <div>
                        <div>
                            <span>Olá,</span>
                            <span>{user?.name}</span>
                        </div>
                        <div className={styles.info}>
                            {user?.email} Cliente, ID# {user?.id}
                        </div>
                    </div>
                </div>
                <div className={styles.link}>
                    <ul>
                        <Link href="/home">
                            <li>
                                <img src="/img/home-gold.svg" height={20} />
                                <a>Home</a>
                            </li>
                        </Link>
                        {/* <div className={styles.submenu}>
                            <div>Cashx</div>
                            <div>Compra Programada</div>
                            <div>Exchange</div>
                        </div> */}
                        <Link href="/extrato">
                            <li>
                                <img src="/img/extract-gold.svg" height={20} />
                                <a>Extrato</a>
                            </li>
                        </Link>
                        {/* <Link href="/stacks">
                            <li>
                                <img src="/img/gold-coin.svg" height={20} />
                                <a>Stacks</a>
                            </li>
                        </Link> */}
                        <Link href="/logout">
                            <li>
                                <img src="/img/signout-gold.svg" height={20} />
                                <a>Sair</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </>
        );
    };

    const loginMenu = () => {
        return (
            <>
                <div className={styles.link}>
                    <ul>
                        <Link href="/login">
                            <li>
                                <img src="/img/signin-gold.svg" height={25} />
                                <a>Entrar</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </>
        );
    };

    return (
        <div id={styles.sidebar}>
            <div>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <img src="/img/logo_CRD.png" height={25} />
                    </div>
                    <div
                        className={styles.menu}
                        onClick={props.toggleExpandMenu}
                    >
                        <img src="/img/hamburger-gold.svg" />
                    </div>
                </div>
                {user ? userLoggedInMenu() : loginMenu()}
            </div>
        </div>
    );
}
