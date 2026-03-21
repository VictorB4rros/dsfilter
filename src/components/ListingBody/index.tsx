import Listing from "../Listing";
import Filter from "../Filter";
import * as productService from '../../services/product-service';

export default function ListingBody() {

    const products = productService.findByPrice(0, Number.MAX_VALUE);

    return (
        <>
            <Filter />
            <Listing products={products} />
        </>
    );
}