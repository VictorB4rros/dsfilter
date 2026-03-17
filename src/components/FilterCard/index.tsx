import './styles.css';

export default function FilterCard() {

    return (
        <div className="dsf-container dsf-filter-container mt20">
            <form className="dsf-form">
                <input 
                    type="text"
                    name="minValue"
                    placeholder="Preço mínimo"
                    className="dsf-input"
                />
                <input 
                    type="text"
                    name="maxValue"
                    placeholder="Preço máximo"
                    className="dsf-input" 
                />
                <div>
                    <button type="submit" className="dsf-button" >Filtrar</button>
                </div>
            </form>
        </div>
    );
}