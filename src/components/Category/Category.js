import { useState } from "react";
import ProductList from "../Product/ProductList";
import CategoryFilter from "./CategoryFilter";

const Category = ({getFilterValue}) => {

    const getCategoryFilterValueHandler = (categoryFilterValue) => {
        getFilterValue(categoryFilterValue);
    }

    return(
        <CategoryFilter getCategoryFilterValue={getCategoryFilterValueHandler} />
    );
}

export default Category;

