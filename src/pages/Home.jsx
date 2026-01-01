import React from "react";
import NavHero from "../components/NavHero";
import ProductPage from "../components/ProductsPage";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Newsletter from "../components/Newsletter";
import ShowCaseProducts from "../components/showCaseProducts";
import Categories from "../components/Categories";
import PromoBanner from "../components/PromoBanner";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div className="selection:bg-[#ff6600] selection:text-white">
      <NavHero />
      <ShowCaseProducts />
      <Categories />
      <HowItWorks />
      <PromoBanner />
      <Features />
      <Testimonials />
      <Faq />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
