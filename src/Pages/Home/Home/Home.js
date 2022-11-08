import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Reviews from "../Reviews/Reviews";
import ServiceCard from "../ServiceCard/ServiceCard";
import SliderBanner from "../SliderBanner/SliderBanner";

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <ServiceCard />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
