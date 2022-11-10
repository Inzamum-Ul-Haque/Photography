import React from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{service.serviceName}</h2>
        <p className="text-start">
          {service.desc.length > 100
            ? service.desc.slice(0, 99) + "..."
            : service.desc}
        </p>
        <h3 className="font-bold text-2xl mt-4 text-left">
          Price: {service.price}
        </h3>
        <div className="card-actions flex justify-between items-center">
          <span className="flex items-center text-yellow-800 text-xl font-semibold">
            {service.rating === 0 ? "Not rated yet" : service.rating}{" "}
            <FaStar className="ml-1" />
          </span>
          <Link to={`/services/${service._id}`}>
            <button className="btn border-slate-800 bg-white text-black hover:bg-slate-800 hover:text-white">
              Details <FiArrowRight className="ml-1 font-bold text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
