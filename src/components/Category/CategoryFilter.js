
import './CategoryFilter.css';

const CategoryFilter = ({value, getCategoryFilterValue}) => {
    
    const filterCategory = [
        { id: '1', label: 'All', value: 'all' },
        { id: '2', label: "Men's Clothing", value: "men's clothing" },
        { id: '3', label: "Women's Clothing", value: "women's clothing"},
        { id: '4', label: 'Electronics', value: "electronics"},
        { id: '5', label: 'Jewelery', value: "jewelery"}
     ];
     
     const onClickCategoryFilterHandler = (event) => {
        getCategoryFilterValue(event.target.value);
     };
  
    return(
        <select className = "category-container" value={value} onChange={onClickCategoryFilterHandler}>
        {filterCategory.map(category =>
           <option key={category.id} value={category.value}> {category.label} </option>
        )}
        </select>
    );
}

export default CategoryFilter;