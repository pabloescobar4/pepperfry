import {ProductPage} from './Components/Product.jsx'
import './App.css';
import { Routes, Route, useParams } from "react-router-dom";
import {HomePage} from "./Components/HomePage"
import {NavBar}  from "./Components/Navbar.jsx"
import {Cart} from "./Components/Cart"
function App() {
  return (
   <>
   <NavBar />
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  
   </>
  );
}

export default App;
