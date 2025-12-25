import styles from './Sidebar.module.scss'
import NavItem from "./NavItem/NavItem.jsx";
import SvgLeftMinimize from "../UI/icons/SvgLeftMinimize.jsx";
import SvgOverviewIcon from "../UI/icons/SvgOverviewIcon.jsx";
import SvgTransactionsIcon from "../UI/icons/SvgTransactionsIcon.jsx";
import SvgBudgetsIcon from "../UI/icons/SvgBudgetsIcon.jsx";
import SvgPotsIcon from "../UI/icons/SvgPotsIcon.jsx";
import SvgBillsIcon from "../UI/icons/SvgBillsIcon.jsx";
import {useState} from "react";


const sidebarMenu = [
    {
        id: 'overview',
        label: 'Overview',
        icon: SvgOverviewIcon,
    },
    {
        id: 'transactions',
        label: 'Transaction',
        icon: SvgTransactionsIcon,
    },
    {
        id: 'budgets',
        label: 'Budgets',
        icon: SvgBudgetsIcon,
    },
    {
        id: 'pots',
        label: 'Pots',
        icon: SvgPotsIcon,
    },
    {
        id: 'bills',
        label: 'Recurring Bills',
        icon: SvgBillsIcon,
    },
]


function Sidebar() {
    const [activeItem, setActiveItem] = useState('overview');
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <a href="#">
                    <img alt="Logo" src="/images/Sidebar/Logo.svg"/>
                </a>
            </div>

            {/* navigation */}
            <nav className="sidebar__nav">
                {sidebarMenu.map((item) => (
                    <NavItem
                        key={item.id}
                        label={item.label}
                        isActive={activeItem === item.id}
                        icon={item.icon}
                    />
                ))}

            </nav>

            {/* minimize button */}
            <button className="sidebar__minimize">
                <SvgLeftMinimize/>
                <span className="minimize__text">Minimize Menu</span>
            </button>
        </aside>
    );
}

export default Sidebar;
