import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "watches",
    label: "Watches",
    img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "bags",
    label: "Bags",
    img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "sneakers",
    label: "Sneakers",
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "tshirts",
    label: "T-Shirts",
    img: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "headphones",
    label: "Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl mb-10 font-semibold">Shop by Category</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/products?category=${cat.name}`)}
            className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={cat.img}
              alt={cat.label}
              className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="bg-black/60 text-white text-center py-3">
              {cat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
