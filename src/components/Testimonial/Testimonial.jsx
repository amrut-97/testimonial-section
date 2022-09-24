import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Testimonial = (props) => {
  return (
    <div className="h-screen bg-gray-800">
      <div className="mb-2 text-center">
        <h2 className="text-4xl font-bold text-blue-600">Testimonials</h2>
        <p className="text-lg text-gray-400">What others say about us</p>
      </div>
      <Swiper
        spaceBetween={10}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-96"
      >
        {props.testimonials.map((testimonial, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <div className="p-4 text-gray-800 rounded-lg shadow-md w-64 h-72 bg-gray-700">
              <div className="mb-2">
                <p className="mb-4 text-center text-md text-slate-200 scrollbar overflow-y-hidden hover:overflow-y-auto h-28">
                  {testimonial.description}
                </p>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-blue-100 rounded-full">
                    <img
                      src={testimonial.src}
                      alt={testimonial.alt}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <h5 className="font-bold text-blue-600">{testimonial.name}</h5>
                  <p className="text-sm text-slate-300">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
