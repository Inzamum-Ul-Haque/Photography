import React, { useEffect, useState } from "react";
import "./ServiceCard.css";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const [topServices, setTopServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topServices")
      .then((res) => res.json())
      .then((data) => setTopServices(data.data));
  });

  return (
    <div className="max-w-screen-xl mx-auto mt-16">
      <h1 className="text-5xl text-center mb-10 services-header font-bold">
        Services
      </h1>
      <div className="grid justify-items-center xl:grid-cols-3 xl:gap-8 lg:grid-cols-2 lg:gap-8 md:grid-cols-2 md:gap-8 sm:grid-cols-1 gap-8 sm:gap-4">
        {topServices.map((service) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={service.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <p className="text-start">
                {service.desc.length > 100
                  ? service.desc.slice(0, 99) + "..."
                  : service.desc}
              </p>
              <h3 className="font-bold text-xl mt-4 text-left">
                {service.price}
              </h3>
              <div className="card-actions flex justify-between items-center">
                <span className="flex items-center text-yellow-300 font-semibold">
                  {service.rating === null ? "Not rated yet" : service.rating}{" "}
                  <FaStar className="ml-1" />
                </span>
                <Link to={`/services/${service._id}`}>
                  <button className="btn btn-primary bg-transparent border-white hover:border-white hover:bg-transparent">
                    Details <FiArrowRight className="ml-1 font-bold text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/services">
        <button className="btn btn-primary mt-12 mb-12 bg-slate-900 border-slate-900 hover:bg-slate-700 hover:border-slate-700">
          See All
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
