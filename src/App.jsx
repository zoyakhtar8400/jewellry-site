import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPages from "./Pages/MainPages";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import OfferBanner from "./components/OfferBanner";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import CheckoutPage from "./Pages/Checkoutpage";
import ProductDescription from "./Pages/ProductDescription";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TopBar />
      <OfferBanner />
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductDescription />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
