import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderBanner.css";
import "swiper/css/bundle";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/autoplay";
import banner1 from "../../../Assets/images/banner/banner-1.jpg";
import banner2 from "../../../Assets/images/banner/banner-2.jpg";
import banner3 from "../../../Assets/images/banner/banner-3.jpg";
import banner4 from "../../../Assets/images/banner/banner-4.jpg";
SwiperCore.use([Autoplay]);

const SliderBanner = () => {
  const bannerImages = [
    {
      header: "Wedding",
      subheader: "Hire photographer for wedding, parties and engagement",
      img: banner1,
    },
    {
      header: "Pre-wedding Photoshoot",
      subheader:
        "Hire for pre-wedding photoshoot. You can also see our pre-wedding photoshoot collections.",
      img: banner2,
    },
    {
      header: "Meetings and Social Engagements",
      subheader: "20-30% off for meeting photoshoots and engagements",
      img: banner3,
    },
    {
      header: "Personal",
      subheader:
        "You can also hire for personal photography at any place you like!",
      img: banner4,
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={true}
      loop={true}
      className="max-w-screen-xl mx-auto mySwiper"
    >
      {bannerImages.map((bannerImage, idx) => (
        <SwiperSlide className="relative" key={idx}>
          <div className="carousel-img">
            <img className="rounded-2xl" src={bannerImage.img} alt="" />
          </div>
          <div className="absolute top-1/3 text-start text-white w-1/2 banner-text">
            <h1 className="text-6xl font-bold">{bannerImage.header}</h1>
            <h3 className="text-3xl font-semibold mt-2">
              {bannerImage.subheader}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBanner;
