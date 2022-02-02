import useFetch from '../../hooks/use-fetch';
import './ProductDetail.css'; 
import ProductDetailItem from './ProductDetailItem';

const ProductDetail = ({url}) => {
    
    const {data, loading} = useFetch(url);

    var productData;

    if(data != null){
        
        console.log("rating : " + data.rating)
        
        productData = 
            <ProductDetailItem 
               id = {data.id}
               name = {data.title}
               category = {data.category}
               description = {data.description}
               imageUrl = {data.image}
            //    rating = {data.rating}
               price = {data.price}
            />
    }

    return(
        <div className="productDetails-container">
            {productData}
        </div>
    )
}

export default ProductDetail;