const reviews = [
  { name: "Ayo", text: "Amazing products and fast delivery!" },
  { name: "Blessing", text: "Quality exceeded my expectations." },
  { name: "David", text: "Best online shopping experience so far." },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl mb-10" style={{ fontFamily: "Alice" }}>
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <p className="italic">"{r.text}"</p>
              <h4 className="mt-4 font-semibold text-[#ff6600]">
                {r.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;