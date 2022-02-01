import ProductList from "./ProductList";
import useFetch from "../../hooks/use-fetch";
import { useState } from "react";

const Product = ({selectedCategory}) => {

    const [url, setUrl] = useState('https://fakestoreapi.com/products');

    console.log(selectedCategory);

    // if (selectedCategory != 'all') {
    //     const tempUrl = 'https://fakestoreapi.com/products/category' + selectedCategory;
    //     setUrl(tempUrl);
    // }


    return(
        <div className="product-container">
           <ProductList url = {url}/>
        </div>
    )
}

export default Product;