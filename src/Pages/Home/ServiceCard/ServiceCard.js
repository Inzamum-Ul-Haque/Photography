import React from "react";
import "./ServiceCard.css";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const ServiceCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-16">
      <h1 className="text-5xl text-center mb-10 services-header font-bold">
        Services
      </h1>
      <div className="grid justify-items-center xl:grid-cols-3 xl:gap-8 lg:grid-cols-2 lg:gap-8 md:grid-cols-2 md:gap-8 sm:grid-cols-1 gap-8 sm:gap-4">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Service Name</h2>
            <p className="text-start">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <h3 className="font-bold text-xl mt-4 text-left">$20</h3>
            <div className="card-actions flex justify-between items-center">
              <span className="flex items-center text-yellow-300 font-semibold">
                (4.2) <FaStar className="ml-1" />
              </span>
              <button className="btn btn-primary bg-transparent border-white hover:border-white hover:bg-transparent">
                Details <FiArrowRight className="ml-1 font-bold text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-12 mb-12 bg-slate-900 border-slate-900 hover:bg-slate-700 hover:border-slate-700">
        See All
      </button>
    </div>
  );
};

export default ServiceCard;
