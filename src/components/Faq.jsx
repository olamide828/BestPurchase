import { useState } from "react";

const faqs = [
  { q: "How long does delivery take?", a: "Delivery takes 2–5 working days." },
  { q: "Can I return a product?", a: "Yes, within 7 days of delivery." },
  { q: "What payment methods do you accept?", a: "Cards, bank transfer & Paystack." },
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl mb-10 text-center" style={{ fontFamily: "Alice" }}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded-xl p-4">
            <button
              className="w-full text-left font-medium"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {f.q}
            </button>
            {open === i && (
              <p className="mt-2 text-gray-600">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
