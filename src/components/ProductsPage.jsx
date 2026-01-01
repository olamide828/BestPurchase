import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";

const categories = [
  { label: "All", value: "" },
  { label: "Electronics", value: "electronics" },
  { label: "Cosmetics", value: "cosmetics" },
  { label: "Fashion", value: "fashion" },
  { label: "Watches", value: "watches" },
  { label: "T-Shirts", value: "tshirts" },
  { label: "Bags", value: "bags" },
  { label: "Sneakers", value: "sneakers" },
];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/products${
          category ? `?category=${category}` : ""
        }`
      );
      setProducts(res.data.allProducts || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Explore Products</h1>
        <p className="text-gray-500 mt-1">
          Browse products uploaded by verified sellers
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex gap-6 border-b mb-8 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`pb-3 text-sm font-medium whitespace-nowrap transition
              ${
                category === cat.value
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400 hover:text-black"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center py-20 text-gray-500">
          Loading products...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-gray-500 mt-1">
            Sellers haven’t uploaded products in this category yet
          </p>
        </div>
      )}

      {/* PRODUCTS GRID */}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
