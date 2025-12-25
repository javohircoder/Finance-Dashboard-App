import TransactionsList from './TransactionsList/TransactionsList';
import styles from './TransactionsSection.module.scss'


function TransactionsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Transactions</h3>

                <a href="#" className={styles.link}>View All
                    <svg
                        fill="none"
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.85375 0.146648L5.85375 5.14665L0.85375 10.8541"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>
            <div className={styles.content}>
                <TransactionsList/>
            </div>
        </section>
    );
}

export default TransactionsSection;
