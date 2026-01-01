const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ff6600] to-[#ff8533] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/20">
          Limited Time Offer
        </span>

        <h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{ fontFamily: "Alice" }}
        >
          Free Delivery on Orders Over ₦50,000
        </h2>

        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Shop your favorite products today and enjoy fast, free delivery
          straight to your doorstep.
        </p>

        <button className="bg-white text-[#ff6600] px-10 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>

      {/* Decorative blur */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
    </section>
  );
};

export default PromoBanner;
