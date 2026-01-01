import React from "react";
import ProductsPage from "../components/ProductsPage";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";

const Products = () => {
  return (
    <div className="selection:bg-[#ff6600] selection:text-white">
      <div className="mb-0">
        <Navbar />
      </div>
      <ProductsPage />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Products;
