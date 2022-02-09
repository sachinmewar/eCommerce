import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const ProductDetails = () => {

    const params = useParams();
    
    const url = 'https://fakestoreapi.com/products/' + params.productId;

    return(
        <ProductDetail url = {url}/>
    );
}

export default ProductDetails;