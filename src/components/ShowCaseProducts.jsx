import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import { Link } from "react-router-dom";

const topProducts = [
  "https://plus.unsplash.com/premium_photo-1692340973191-1ebe5b787c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxnbGFzc2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1635650804512-003e5ee6ccac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcHxlbnwwfHwwfHx8MA%3D%3D",
];

const bottomProducts = [
  "https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHZ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHM1fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1691367279313-71af7ba83f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGplYW5zfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww",
];

const ShowCaseProducts = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Shiny background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/20 via-white to-[#ff6600]/10 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-16">
        {/* TOP SWIPER */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={6000}
          className="!overflow-visible"
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {topProducts.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-3 hover:scale-105 transition">
                <img
                  src={img}
                  alt="Product"
                  className="h-40 w-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="flex flex-col items-center text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl text-gray-900"
            style={{ fontFamily: "Alice" }}
          >
            Discover Products You’ll Love
          </h2>

          <Link to="/products">
            <button
              className="flex items-center gap-3 bg-[#ff6600] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e65c00] transition shadow-xl"
              style={{ fontFamily: "Poppins" }}
            >
              Explore Products
              <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* BOTTOM SWIPER (SCATTERED) */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          pagination
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={7000}
          className="!overflow-visible"
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {bottomProducts.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-2xl shadow-lg p-3"
                style={{
                  transform: `rotate(${
                    index % 2 === 0 ? "-6deg" : "6deg"
                  }) translateY(${index % 2 === 0 ? "10px" : "-10px"})`,
                }}
              >
                <img
                  src={img}
                  alt="Product"
                  className="h-36 w-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShowCaseProducts;
