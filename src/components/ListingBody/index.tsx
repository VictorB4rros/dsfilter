import Listing from "../Listing";
import Filter from "../Filter";
import * as productService from '../../services/product-service';
import { useState } from "react";
import type { ProductDTO } from "../../models/product";
import type { FormData } from "../../models/form";

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(productService.findByPrice(Number.MIN_VALUE, Number.MAX_VALUE));

    function handleFilter(formData: FormData) {
        const result = productService.findByPrice(formData.minValue || Number.MIN_VALUE, formData.maxValue || Number.MAX_VALUE);
        setProducts(result);
    }

    return (
        <>
            <Filter onFilter={handleFilter} />
            <Listing products={products} />
        </>
    );
}