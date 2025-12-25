import PotsList from '../PotsList/PotsList';
import PotsSummary from '../PotsSummary/PotsSummary';
import styles from './Pots.module.scss'

const potsData = [
    {id: 1, name: 'Savings', amount: '$159'},
    {id: 2, name: 'Gift', amount: '$40'},
    {id: 3, name: 'Concert Ticket', amount: '$110'},
    {id: 4, name: 'New Laptop', amount: '$10'},
];

function Pots() {
    return (
        <div className={styles.pots}>
            <PotsSummary total="$850"/>
            <PotsList items={potsData}/>
        </div>
    );
}

export default Pots;
