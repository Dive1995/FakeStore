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


const url = "https://fakestoreapi.com/products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(url))
  })


  return (
    <div className="App">
      {/* <FakeStore/> */}
      <Navbar/>
      {/* <Home/> */}
      <Products/>
      {/* <Sidebar/> */}

    </div>
  );
}

export default App;