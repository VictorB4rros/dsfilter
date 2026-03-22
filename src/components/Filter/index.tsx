import { useState } from 'react';
import './styles.css';
import type { FormData } from '../../models/form';

type Props = {
    onFilter: Function;
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({
        minValue: undefined,
        maxValue: undefined
    });

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData);
    }

    return (
        <div className="dsf-container dsf-filter-container mt20">
            <form className="dsf-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="minValue"
                    value={formData.minValue || ""}
                    placeholder="Preço mínimo"
                    className="dsf-input"
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="maxValue"
                    value={formData.maxValue || ""}
                    placeholder="Preço máximo"
                    className="dsf-input"
                    onChange={handleInputChange} 
                />
                <div>
                    <button type="submit" className="dsf-button" >Filtrar</button>
                </div>
            </form>
        </div>
    );
}