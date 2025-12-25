import styles from './Card.module.scss';

function Card({label, amount, variant = 'light'}) {
    return (
        <div className={`${styles.card} ${styles[`card--${variant}`]}`}>
            <span className={styles.label}>{label}</span>
            <span className={styles.amount}>{amount}</span>
        </div>

        // <div key={card.label} className={`card card--${card.variant}`}>
        //     <span className="card__label">{card.label}</span>
        //     <span className="card__amount">{card.amount}</span>
        //     <span></span>
        // </div>
    );
}

export default Card;
