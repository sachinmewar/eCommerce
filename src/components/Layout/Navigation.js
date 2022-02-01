import CartButton from './CartButton';
import './Navigation.css';
import WishlistButton from './WishlistButton';
import Category from '../Category/Category';


const Navigation = ({setCategoryFilterValue}) => {

  const getCategoryFilterValueHandler = (categoryFilterValue) => {
    setCategoryFilterValue(categoryFilterValue);
  }
  

  return(
        <header className="navigation-container"> 
          <div id='logo'> eCommerce </div>
          <Category getFilterValue = {getCategoryFilterValueHandler}/>
          {/* <SearchBar />  */}
          <WishlistButton />
          <CartButton />
        </header>
    )
}

export default Navigation;