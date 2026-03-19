import type { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    products: ProductDTO[];
}

export default function DataCard({ products }: Props) {
    
    return (
        <div className="dsf-container dsf-data-container mt20">
            {
                products.map(product => (
                    <div key={product.id} className="data-card">
                        <p className="product-name" >{product.name}</p>
                        <p className="product-price" >R$ {product.price.toFixed(2)}</p>
                    </div>
                ))
            }
        </div>
    );
}