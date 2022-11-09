import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ServiceDetails.css";
import { FaStar } from "react-icons/fa";
import ServiceReviews from "./ServiceReviews";
import useTitle from "../../Hooks/useTitle";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  useTitle(data.serviceName);

  return (
    <div className="max-w-screen-xl mx-auto mt-16 mb-16 service-details-container">
      <h1 className="text-5xl text-center mb-10 service-details-header font-bold">
        Service Details
      </h1>
      <div className="flex justify-center">
        <img className="rounded-2xl w-3/4" src={data.image} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl mt-8 mb-8 text-start">{data.serviceName}</h1>
        <p className="text-2xl text-yellow-800 flex">
          {data.rating === 0 ? "Not rated yet" : data.rating}{" "}
          <FaStar className="mt-1 ml-1" />
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-start mb-5">
          Starting Prize: {data.price}
        </h3>
        <p className="text-start font-semibold text-xl">{data.desc}</p>
      </div>
      <ServiceReviews />
    </div>
  );
};

export default ServiceDetails;
