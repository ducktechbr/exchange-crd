import Link from 'next/link';
import styles from '../../../styles/components/SidebarShort.module.scss';

export default function SidebarShort(props) {
    return (
        <div id={styles.sidebar}>
            <div>
                <div className={styles.brand}>
                    <div
                        className={styles.menu}
                        onClick={props.toggleExpandMenu}
                    >
                        <img height={30} src="/img/short-icon.png" />
                    </div>
                </div>
                <div className={styles.link}>
                    <ul>
                        <Link href="/home">
                            <li>
                                <img src="/img/home-gold.svg" height={20} />
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
                            </li>
                        </Link>
                        <Link href="/stacks">
                            <li>
                                <img src="/img/gold-coin.svg" height={20} />
                            </li>
                        </Link>
                        <Link href="/login">
                            <li>
                                <img src="/img/signout-gold.svg" height={20} />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
