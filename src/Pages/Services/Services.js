import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";
import "./Services.css";
import useTitle from "../../Hooks/useTitle";

const Services = () => {
  const { data } = useLoaderData();
  useTitle("Services");

  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-10">
      <h1 className="text-5xl text-center mb-10 all-services-header font-bold">
        Available Services
      </h1>
      <div className="services-container grid justify-items-center xl:grid-cols-3 xl:gap-8 lg:grid-cols-2 lg:gap-8 md:grid-cols-2 md:gap-8 sm:grid-cols-1 gap-8 sm:gap-4">
        {data.map((service) => (
          <SingleService key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
