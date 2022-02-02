import ProductImage from "./ProductImage";
import './ProductItem.css';

const ProductItem = (props) => {
    var price = '$' + props.price;

    const onImageClickHandler = (value) => {
        props.onImageClick([value, props.id]);
    }
    return(
        <div className="productItem-container">
            <ProductImage imageUrl = {props.imageUrl} onImageClick = {onImageClickHandler}/>
            <div id = "name"> {props.name} </div>
            <div id="price"> {price} </div>
            <button> Wishlist </button>
            <button> Add to Cart </button>
        </div>
    )

}

export default ProductItem;