import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageViewer from "../components/ImageViewer";
import Description from "../components/Description";
import Suggestions from "../components/Suggestions";
import BestSellers from "../components/BestSellers";

const ProductDescriptionPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://glitzzera-backend.vercel.app/api/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Product not found
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen ">
        <div className="w-full lg:w-2/3 lg:sticky lg:top-0 lg:h-screen">
          <ImageViewer images={product.images} />
        </div>
        <div className="w-full lg:w-1/3">
          <Description product={product} />
        </div>
      </div>
      <div className="">
        <Suggestions />
        <BestSellers />
      </div>
    </>
  );
};

export default ProductDescriptionPage;
