import { useState } from "react";
import Header from "../components/Header.jsx";
import TopBar from "../components/TopBar.jsx";
import OfferBanner from "../components/OfferBanner.jsx";
import CategoryNav from "../components/CategoryNav.jsx";
import DescriptionSection from "../components/DescriptionSection.jsx";
import ProductFilter from "../components/ProductFilter.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import PageDescription from "../components/PageDescription.jsx";
import BottomNav from "../Slidess/BottomNav.jsx";
function CategoryPage() {
  return (
    <>
      <CategoryNav />
      <DescriptionSection />
      <ProductFilter />
      <ProductGrid />
      <PageDescription />
      <BottomNav />
    </>
  );
}

export default CategoryPage;
