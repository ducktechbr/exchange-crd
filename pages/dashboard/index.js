import styles from '../../styles/pages/Dashboard.module.scss';

export default function Dashboard(props) {
    return (
        <div id={styles.dashboardContainer}>
            <div className={styles.balanceContainer}></div>
            <div className={styles.productContainer}>
                <div className={styles.productCard}>
                    <div className={styles.label}>
                        <span>CashX</span>
                    </div>
                    <div className={styles.cta}>
                        <button>Acessar</button>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.label}>
                        <span>Compra Programada</span>
                    </div>
                    <div className={styles.cta}>
                        <button>Acessar</button>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.label}>
                        <span>Exchange</span>
                    </div>
                    <div className={styles.cta}>
                        <button>Acessar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
