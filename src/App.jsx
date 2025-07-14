import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import TopBar from "./components/TopBar";
import OfferBanner from "./components/OfferBanner";
import Footer from "./components/Footer";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import CheckoutPage from "./Pages/Checkoutpage";
import ProductDescription from "./Pages/ProductDescription";
import CategoryPage from "./Pages/CategoryPage.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Complaint from "./Pages/Complaint";
import ContactUs from "./Pages/ContactUs.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import StyleGuide from "./Pages/StyleGuide.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TopBar />
      <OfferBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/styleguide" element={<StyleGuide />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
