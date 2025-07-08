import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPages from "./Pages/MainPages";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import OfferBanner from "./components/OfferBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TopBar />
      <OfferBanner />
      <Routes>
        <Route path="/" element={<MainPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
