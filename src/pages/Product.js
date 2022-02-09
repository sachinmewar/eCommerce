import ProductList from "../components/Product/ProductList";

const Product = () => {
    const Url = "https://fakestoreapi.com/products";

    return(
        <div className="product-container">
            <ProductList url = {Url} />
        </div>
    )
}

export default Product;