import FakeStore from "./FakeStore";
import Navbar from './Navbar'
import Header from './Header'
import Sidebar from "./Sidebar";
import Products from "./Products"
import TrendingNow from "./TrendingNow";
import FeaturedProducts from "./FeaturedProducts";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/productSlice";
import { useEffect } from "react";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Cart from "./Cart";


const url = "https://fakestoreapi.com/products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(url))
  })


  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* <div className="app-content"> */}
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/products">
              <Products/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/product/:id">
              <SingleProduct/>
            </Route>
          </Switch>
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App;