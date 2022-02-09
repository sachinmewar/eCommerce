import { useParams } from "react-router-dom";
import ProductList from "../components/Product/ProductList";

const ProductCategory = () => {

    const params = useParams();
    console.log(params.category);
    const Url = 'https://fakestoreapi.com/products/category/' + params.category;
    
    return(
        <ProductList url = {Url}/>
    );
}

export default ProductCategory;