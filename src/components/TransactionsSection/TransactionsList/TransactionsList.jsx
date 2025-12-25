import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionsList.module.scss';

const transactions = [
    {
        id: 1,
        name: 'Emma Richardson',
        amount: '+$75.50',
        date: '19 Aug 2024',
        type: 'positive',
        avatar: '/images/Main/users/Person-1.png',
    },
    {
        id: 2,
        name: 'Savory Bites Bistro',
        amount: '-$55.50',
        date: '19 Aug 2024',
        type: 'negative',
        avatar: '/images/Main/users/Bread.png',
    },
];

function TransactionsList() {
    return (
        <div className={styles.list}>
            {transactions.map(item => (
                <TransactionItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export default TransactionsList;
