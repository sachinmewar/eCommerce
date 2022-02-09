import { Link } from 'react-router-dom';
import './ProductImage.css';

const ProductImage = (props) => {
    const imageUrl = props.imageUrl;

    const url = "/product-detail/" + props.id;

    return(
        <div className="image-container">
            <Link to = {url}>
                <img src={imageUrl} alt="Failed to load image.." />
            </Link>
        </div>
    )
}

export default ProductImage;