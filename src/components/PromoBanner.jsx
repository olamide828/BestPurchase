const PromoBanner = () => {
  return (
    <section className="py-16 bg-[#ff6600] text-white text-center">
      <h2 className="text-3xl mb-4" style={{ fontFamily: "Alice" }}>
        Limited Time Offer 
        {/* 🎉 */}
      </h2>
      <p className="mb-6">
        Get FREE delivery on orders above ₦50,000
      </p>
      <button className="bg-white text-[#ff6600] px-8 py-3 rounded-full font-medium">
        Shop Now
      </button>
    </section>
  );
}

export default PromoBanner;
