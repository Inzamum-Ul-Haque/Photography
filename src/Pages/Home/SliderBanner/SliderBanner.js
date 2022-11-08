import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderBanner.css";
import "swiper/css/bundle";
import "swiper/css";
import banner1 from "../../../Assets/images/banner/banner-1.jpg";
import banner2 from "../../../Assets/images/banner/banner-2.jpg";
import banner3 from "../../../Assets/images/banner/banner-3.jpg";
import banner4 from "../../../Assets/images/banner/banner-4.jpg";

const SliderBanner = () => {
  const bannerImages = [
    {
      header: "",
      subheader: "",
      img: banner1,
    },
    {
      header: "",
      subheader: "",
      img: banner2,
    },
    {
      header: "",
      subheader: "",
      img: banner3,
    },
    {
      header: "",
      subheader: "",
      img: banner4,
    },
  ];

  return (
    <Swiper className="max-w-screen-xl mySwiper">
      {bannerImages.map((bannerImage, idx) => (
        <SwiperSlide className="carousel-img" key={idx}>
          <img className="rounded-2xl" src={bannerImage.img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBanner;
