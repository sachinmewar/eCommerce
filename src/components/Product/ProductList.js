
import { useState } from "react";
import useFetch from "../../hooks/use-fetch";
import Pagination from "../Pagination/Pagination";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = (props) => {

    const url = props.url;
    const {data, loading} = useFetch(url);
    
    var productData;

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;


    const onClickPreviousButtonhandler =()=>{
        if(currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }
    const onClickNextButtonhandler =()=>{
        if(currentPage === 4) return
        setCurrentPage(currentPage + 1)
    }

    if(data != null){

        const indexOfLastProduct = currentPage * pageSize;
        const indexOfFirstProduct = indexOfLastProduct - pageSize;
        const paginatedProductData = data.slice(indexOfFirstProduct, indexOfLastProduct);

        productData = paginatedProductData.map( (productValue) =>
            <ProductItem 
               key = {productValue.id}
               id = {productValue.id}
               name = {productValue.title}
               category = {productValue.category}
               description = {productValue.description}
               imageUrl = {productValue.image}
               rating = {productValue.rating}
               price = {productValue.price}
            />
        )
    }

    return(
        <div className="productList-container">
            {loading && 
            <div> loading </div>
            }
            {productData}
            <Pagination pageNumber = {currentPage} onClickPrevious = {onClickPreviousButtonhandler} onClickNext = {onClickNextButtonhandler}/>
        </div>
    )
}

export default ProductList;
