const steps = [
  { title: "Browse Products", desc: "Explore our wide range of items" },
  { title: "Add to Cart", desc: "Choose your favorite products" },
  { title: "Secure Payment", desc: "Pay safely with trusted gateways" },
  { title: "Fast Delivery", desc: "We deliver straight to your door" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl mb-12" style={{ fontFamily: "Alice" }}>
        How It Works
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="h-14 w-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#ff6600] text-white text-xl">
              {i + 1}
            </div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;