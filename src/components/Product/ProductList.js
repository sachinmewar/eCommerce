
import useFetch from "../../hooks/use-fetch";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = (props) => {
    const url = props.url;
    const {data, loading} = useFetch(url);
    var productData;

    const onImageClickHandler = (productDetails) => {
        props.onImageClick(productDetails)
    }

    if(data != null){
        productData = data.map( (productValue) =>
            <ProductItem 
               key = {productValue.id}
               id = {productValue.id}
               name = {productValue.title}
               category = {productValue.category}
               description = {productValue.description}
               imageUrl = {productValue.image}
               rating = {productValue.rating}
               price = {productValue.price}
               onImageClick = {onImageClickHandler}
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
