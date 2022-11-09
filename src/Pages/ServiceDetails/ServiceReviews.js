import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/images/clients/img-1.jpg";
import { AuthContext } from "../../Contexts/AuthProvider";

const ServiceReviews = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-5xl text-start mb-10 mt-10 service-details-header font-bold">
        Reviews
      </h1>
      <div className="border border-slate-900 rounded-2xl p-5">
        <div className="flex mb-2">
          <div className="avatar mr-5">
            <div className="w-16 rounded-full">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">Fahmeed Mahmud</h4>
            <p className="text-gray-500 text-sm text-start">12 Feb, 2022</p>
          </div>
        </div>
        <div>
          <p className="text-start">
            The service provided by the photographer is really very good. They
            are quick with response and very warm to the service. The clicks
            were amazing and the work was really like a professional. You really
            need to have a proper photography knowledge to do these kinds of
            work.
          </p>
        </div>
      </div>
      {!user ? (
        <p className="text-lg text-left mt-5">
          Please{" "}
          <Link className="font-bold" to="/signin">
            Login
          </Link>{" "}
          to give a review!
        </p>
      ) : (
        <div className="mt-10 flex flex-col justify-start">
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Add a review"
          ></textarea>
          <button className="btn hover:bg-slate-800 w-max mt-2">Share</button>
        </div>
      )}
    </div>
  );
};

export default ServiceReviews;
