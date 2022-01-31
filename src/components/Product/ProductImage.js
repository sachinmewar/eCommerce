import './ProductImage.css';

const ProductImage = (props) => {
    const imageUrl = props.imageUrl;
    return(
        <div className="image-container">
            <img src={imageUrl} alt="Failed to load image.." />
        </div>
    )
}

export default ProductImage;