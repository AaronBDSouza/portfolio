import TopBar from "./components/topBar/TopBar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Products from "./components/products/Products"
import ProductsList from "./components/productsList/ProductsList";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ProductViewer from "./components/productViewer/ProductViewer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./components/billing/Billing";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import Dashboard from "./components/dashboard/Dashboard";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Sales from "./pages/Sales/Sales";
import Select from 'react-select';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterUser />}/>
        <Route path="/login" element={<LoginUser />}/>  
        <Route path="/dashboard" element={<Dashboard />}/>   
        <Route path="/category" element={<Category />}/>
        <Route path="/product" element={<Product />}/> 
        <Route path="/sales" element={<Sales />}/>   
      </Routes>
    </BrowserRouter>
      // <BrowserRouter>
      //   <Routes>
      //     <Route exact path="/" element={<Home/>} />
      //     <Route path="/emplogin" element={<Billing/>} />
      //     {/* <React.Fragment></React.Fragment> */}
      //     {/* <div className="app"></div> */}
      //   </Routes>
      // </BrowserRouter>
      // <div className="app">YALA HABIBI</div>

  );
}

export { BACKEND_URL };
export default App;
