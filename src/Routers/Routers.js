import React from "react";
import { Routes, Route } from "react-router-dom";
import CateAdd from "../pages/admin/category/CateAdd";
import CateEdit from "../pages/admin/category/CateEdit";
import CateList from "../pages/admin/category/CateList";
import Product from "../pages/admin/products/Product";
import ProductsAdd from "../pages/admin/products/ProductsAdd";
import ProductsEdit from "../pages/admin/products/ProductsEdit";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Protected from "../pages/Protected";
import Report from "../pages/Report";
import SearchImg from "../pages/SearchImg";
import SearchWeather from "../pages/SearchWeather";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Protected><Cart /></Protected>} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/searchImg" element={<SearchImg />} />
        <Route path="/searchWeather" element={<SearchWeather />} />


        {/* ADMIN */}
        <Route path="/manageProduct" element={<Product />} />
        <Route path="/product-add" element={<ProductsAdd />} />
        <Route path="/product-edit/:id" element={<ProductsEdit />} />

        <Route path="/manageCategory" element={<CateList />} />
        <Route path="/cate-add" element={<CateAdd />} />
        <Route path="/cate-edit/:id" element={<CateEdit />} />
        {/* ADMIN */}
      </Routes>
    </div>
  );
};

export default Routers;
