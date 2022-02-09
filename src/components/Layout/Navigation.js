import CartButton from './CartButton';
import './Navigation.css';
import WishlistButton from './WishlistButton';
import Category from '../Category/Category';
import SearchBar from './SearchBar';

const Navigation = ({setCategoryFilterValue}) => {

  return(
        <header className="navigation-container"> 
          <div id='logo'> eCommerce </div>
          <Category />
          <SearchBar /> 
          <WishlistButton />
          <CartButton />
        </header>
    )
}

export default Navigation;