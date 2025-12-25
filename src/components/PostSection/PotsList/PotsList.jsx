import PotsItem from '../PotsItem/PotsItem';
import styles from './PotsList.module.scss'

function PotsList({items}) {
    return (
        <div className={styles.list}>
            {items.map(item => (
                <PotsItem key={item.id} name={item.name} amount={item.amount}/>
            ))}
        </div>
    );
}

export default PotsList;
