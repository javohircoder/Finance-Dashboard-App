import styles from './PotsItem.module.scss'

function PotsItem({name, amount}) {
    return (
        <div className={styles.item} data-state="saving">
            <span className={styles.name}>{name}</span>
            <span className={styles.amount}>{amount}</span>
        </div>
    );
}

export default PotsItem;
