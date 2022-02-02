import './ProductImage.css';

const ProductImage = (props) => {
    const imageUrl = props.imageUrl;

    const onImageClickHandler = () => {
        props.onImageClick(true)
    } 

    return(
        <div className="image-container">
            <img src={imageUrl} alt="Failed to load image.."  onClick={onImageClickHandler}/>
        </div>
    )
}

export default ProductImage;