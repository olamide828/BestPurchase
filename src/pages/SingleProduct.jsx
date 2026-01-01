import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      {/* IMAGE */}
      <img
         src={
            product.productImage?.[0]
            ? `http://localhost:4000/uploads/${product.productImage[0]}`
        : ""
         }
        alt={product.title}
        className="w-full h-96 object-contain rounded-lg"
      />

      {/* DETAILS */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
