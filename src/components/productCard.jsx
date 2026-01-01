import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="block w-64 bg-white rounded-lg shadow hover:shadow-lg transition"
    >
      <img
        src={`http://localhost:4000/uploads/${product.productImage[0]}`}
        alt={product.title}
        className="h-40 w-full object-contain rounded-t-lg"
      />

      <div className="p-3">
        <h3 className="font-semibold truncate">{product.title}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
        <p className="text-xs text-gray-400 capitalize">
          {product.category}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
