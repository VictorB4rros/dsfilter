import { useContext } from 'react';
import './styles.css';
import { ContextFilterCount } from '../../utils/context-filter';

export default function Header() {

    const { contextFilterCount } = useContext(ContextFilterCount);
    return (
        <header className="dsf-header">
            <nav className="dsf-container dsf-header-container">
                <h1>DSFilter</h1>
                <p>{contextFilterCount} produto(s)</p>
            </nav>
        </header>
    );
}