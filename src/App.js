import './App.css';
import Navigation from './components/Layout/Navigation';
import Product from './pages/Product';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import ProductCategory from './pages/ProductCategory';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';


function App() {
  
  return (
    <div className='app'>
      <Navigation />
      <br />
      <Switch>
        <Route path = "/"  exact>
          <Redirect to="/product" />
        </Route>

        <Route path = "/product/all" exact>
          <Redirect to= "/product" /> 
        </Route> 

        <Route path = "/product" exact>
          <Product />
        </Route> 

        <Route path = "/product/:category" exact>
          <ProductCategory />
        </Route> 
        
        <Route path="/product-detail/:productId" exact>
          <ProductDetails />
        </Route>

        <Route path = "/wishlist" exact>
          <Wishlist />
        </Route> 

        <Route path = "/cart" exact>
          <Cart />
        </Route> 

        <Route path = "*">
          <Redirect to= "/" />
        </Route>
      </Switch>
    </div>
    );
}

export default App;
