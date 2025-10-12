import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_1 from '../assets/banner_1.jpg'
import banner_2 from '../assets/banner_2.jpg'
import banner_3 from '../assets/banner_3.jpg'
import { Typewriter } from "react-simple-typewriter";
// import "./Banner.css"; // optional for custom styling

const slides = [
  {
    image: banner_1,
    title: "Spring Gardening Workshop",
    description: "Join us for a day full of learning and planting fun.",
    button: "Join Now",
  },
  {
    image: banner_2,
    title: "Nature Photography Contest",
    description: "Capture the beauty of gardens around you!",
    button: "Enter Contest",
  },
  {
    image: banner_3,
    title: "Community Garden Meetup",
    description: "Connect with local gardeners and share your tips.",
    button: "Register",
  },
];

const Banner = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className=" overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] md:h-[800px] flex items-center justify-center text-white relative bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative text-center max-w-2xl px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <Typewriter
                    words={[slide.title]}
                  loop></Typewriter>
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <button className="btn bg-secondary hover:bg-primary text-white text-lg px-6 py-3 rounded-full shadow-lg">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
