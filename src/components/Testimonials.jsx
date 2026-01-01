import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  { name: "Ayo", text: "Amazing products and fast delivery!", rating: 5 },
  { name: "Blessing", text: "Quality exceeded my expectations.", rating: 5 },
  { name: "David", text: "Best online shopping experience so far.", rating: 4 },
  { name: "Tunde", text: "Customer service was very responsive.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{ fontFamily: "Alice" }}
        >
          What Our Customers Say
        </h2>

        <p className="text-gray-500 mb-14 max-w-xl mx-auto">
          Trusted by customers all over Nigeria.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border hover:shadow-lg transition duration-300 h-full">
                {/* Avatar */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#ff6600]/10 text-[#ff6600] font-bold mb-4">
                  {r.name.charAt(0)}
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`text-sm ${
                        idx < r.rating ? "text-[#ff6600]" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 italic leading-relaxed">
                  “{r.text}”
                </p>

                <h4 className="mt-6 font-semibold text-gray-900">
                  {r.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
