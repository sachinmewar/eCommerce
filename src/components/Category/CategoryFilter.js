
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './CategoryFilter.css';

const CategoryFilter = ({value, getCategoryFilterValue}) => {

    let history = useHistory();

    
    const filterCategory = [
        { id: '1', label: 'All', value: 'all' },
        { id: '2', label: "Men's Clothing", value: "men's clothing" },
        { id: '3', label: "Women's Clothing", value: "women's clothing"},
        { id: '4', label: 'Electronics', value: "electronics"},
        { id: '5', label: 'Jewelery', value: "jewelery"}
     ];
     
     var Url;
     
     const onClickCategoryFilterHandler = (event) => {
        history.push(`/product/${event.target.value}`);
     };
  
    return(
        <select className = "category-container" value={value} onChange={onClickCategoryFilterHandler}>
        { filterCategory.map(category => 
            <option key={category.id} label = {category.label} value={category.value}>
                {category.label}
            </option>
        )} 
        </select>
    );
}

export default CategoryFilter;