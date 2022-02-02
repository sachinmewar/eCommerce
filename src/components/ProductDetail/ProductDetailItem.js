
import './ProductDetailItem.css'

const ProductDetailItem = (props) => {
    
    return(
    <div className="productItemDetails-container">  

        <img src = {props.imageUrl} alt='failed to load image'/>
        <div>
        <div id = "name"> {props.name} </div>
        <div id="price"> Price : {props.price} </div>
        <div id='description'> About this item : {props.description}</div>
        {/* <div id = 'rating'> {props.rating} </div> */}
        <button> Add to Wishlist </button>
        <button> Add to Cart </button>    
        </div>
        {/* <div id = "name"> {props.name} </div>
        <div id="price"> {props.price} </div>
        <div id='description'> {props.description}</div>
        {/* <div id = 'rating'> {props.rating} </div> */}
        {/*<button> Wishlist </button>
        <button> Add to Cart </button> */}
    </div>

    )
}

export default ProductDetailItem;