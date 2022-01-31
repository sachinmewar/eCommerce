import useFetch from "../../hooks/use-fetch";
import ProductImage from "./ProductImage";

import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = () => {
    const {data, loading, error} = useFetch('https://fakestoreapi.com/products');
    var productData;

    if(data != null){
        productData = data.map( (productValue) =>
            <ProductItem 
               key = {productValue.id}
               name = {productValue.title}
               category = {productValue.category}
               description = {productValue.description}
               imageUrl = {productValue.image}
               rating = {productValue.rating}
               price = {productValue.price}
            />
        )
    }
    
    return(
        <div className="productList-container">
            {productData}
        </div>
    )
}

export default ProductList;
