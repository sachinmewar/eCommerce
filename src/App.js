import {useState} from 'react';
import './App.css';
import Navigation from './components/Layout/Navigation';
import Product from './components/Product/Product';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {

  const [selectedCategory, setSelectedCategory] = useState("all");

  const setSelectedCategoryValueHandler = (categoryFilterValue) => {
    setSelectedCategory(categoryFilterValue);
  }
  
  return (
    <div className='app'>
      <Navigation setCategoryFilterValue = {setSelectedCategoryValueHandler} />
      <br />
      <Switch>
        <Route path = "/">
          <Redirect to="/product" />
          <Product selectedCategory = {selectedCategory}/>
        </Route>

        {/* { <Route path = "/product">
          <Product selectedCategory = {selectedCategory}/>
        </Route> } */}
        
        <Route path="/productDetails">
          
        </Route>

        <Route path = "*">
          <Redirect to= "/" />
        </Route>
      </Switch>
    </div>
    );
}

export default App;
