import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Delivery takes 2–5 working days depending on your location.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, you can return any product within 7 days of delivery if it’s unused and in its original condition.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept debit/credit cards, bank transfer, and secure payments via Paystack.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          style={{ fontFamily: "Alice" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border shadow-sm overflow-hidden transition"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                {open === i ? (
                  <FiMinus className="text-[#ff6600]" />
                ) : (
                  <FiPlus className="text-[#ff6600]" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
