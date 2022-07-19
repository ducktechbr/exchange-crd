import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../../styles/components/SidebarBottom.module.scss';

export default function SidebarBottom(props) {
    return (
        <div id={styles.sidebar}>
            <div>
                <div className={styles.link}>
                    <ul>
                        <Link href="/home">
                            <li>
                                <img src="/img/home-gold.svg" height={20} />
                            </li>
                        </Link>
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
