import FakeStore from "./FakeStore";
import Navbar from './Navbar'
import Header from './Header'
import Sidebar from "./Sidebar";
import Products from "./Products"

const url = "https://fakestoreapi.com/products";

function App() {



  return (
    <div className="App">
      <FakeStore/>
      <Navbar/>
      <Header/>
      <Sidebar/>
      <Products/>
    </div>
  );
}

export default App;