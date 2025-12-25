import styles from './PotsSummary.module.scss';
import SvgPotsIcon2 from "../../UI/icons/SvgPotsIcon2.jsx";

function PotsSummary({total}) {
    return (
        <div className={styles.summary}>
            <div className={styles.icon}>
                <SvgPotsIcon2/>
            </div>

            <div className={styles.total}>
                <span className={styles.label}>Total Saved</span>
                <span className={styles.amount}>{total}</span>
            </div>
        </div>
    );
}

export default PotsSummary;
