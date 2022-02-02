import ProductList from "./ProductList";
import useFetch from "../../hooks/use-fetch";
import { useState } from "react";
import { Route } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const Product = ({selectedCategory}) => {

    const [url, setUrl] = useState('https://fakestoreapi.com/products');
    const [isImageClicked, setIsImageClicked] = useState(false);

    console.log(selectedCategory);

    let tempUrl;

     if (selectedCategory === 'all') {
         tempUrl = 'https://fakestoreapi.com/products';
     }
     else{
         tempUrl = 'https://fakestoreapi.com/products/category/' + selectedCategory;
     }

    const onImageClickHandler = (productDetails) => {
        setIsImageClicked(productDetails[0])
        setUrl('https://fakestoreapi.com/products/' + productDetails[1])
    }

    return(
        <div className="product-container">
            { !isImageClicked && 
            <ProductList url = {tempUrl} onImageClick = {onImageClickHandler}/>
            }

            {
               isImageClicked &&
                  <ProductDetail url = {url}/>
            }
        </div>
    )
}

export default Product;