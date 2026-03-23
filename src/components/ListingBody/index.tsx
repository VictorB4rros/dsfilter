import Listing from "../Listing";
import Filter from "../Filter";
import * as productService from '../../services/product-service';
import { useContext, useState } from "react";
import type { ProductDTO } from "../../models/product";
import type { FormData } from "../../models/form";
import { ContextFilterCount } from "../../utils/context-filter";

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(productService.findByPrice(Number.MIN_VALUE, Number.MAX_VALUE));

    const { setContextFilterCount } = useContext(ContextFilterCount);

    function handleFilter(formData: FormData) {
        const result = productService.findByPrice(formData.minValue || Number.MIN_VALUE, formData.maxValue || Number.MAX_VALUE);
        setContextFilterCount(result.length);
        setProducts(result);
    }

    return (
        <>
            <Filter onFilter={handleFilter} />
            <Listing products={products} />
        </>
    );
}