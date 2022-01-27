import CartButton from './CartButton';
import CartIcon from './CartIcon';
import './Navigation.css';

const Navigation = () => {
    return(
        <header className="navigation-container"> 
          <div id='logo'> eCommerce </div>
          <div id='category'> category </div>
          <div id='searchBar'> </div>
          <div id='searchIcon'> searchIcon </div>
          <CartButton></CartButton>
        </header>

    )
}

export default Navigation;