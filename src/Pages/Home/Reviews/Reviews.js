import React from "react";
import "./Reviews.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import client1 from "../../../Assets/images/clients/img-1.jpg";
import client2 from "../../../Assets/images/clients/img-2.jpg";
import client3 from "../../../Assets/images/clients/img-3.jpg";

const Reviews = () => {
  return (
    <div className="reviews-container max-w-screen-xl mx-auto mb-16">
      <h1 className="text-5xl text-center mb-10 services-header font-bold">
        Reviews from Clients
      </h1>
      <div className="grid justify-items-center xl:grid-cols-3 xl:gap-8 lg:grid-cols-2 lg:gap-8 md:grid-cols-2 md:gap-8 sm:grid-cols-1 gap-8 sm:gap-4">
        <div className="bg-stone-300 p-6 review-card rounded-lg shadow-2xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={client1} alt="" />
            </div>
          </div>
          <h4 className="text-2xl font-bold mb-5 mt-2">Fahmeed Mahmud</h4>
          <div className="flex justify-center text-2xl mb-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-lg">
            The service provided by the photographer is really very good. They
            are quick with response and very warm to the service. The clicks
            were amazing and the work was really like a professional. You really
            need to have a proper photography knowledge to do these kinds of
            work.
          </p>
        </div>
        <div className="bg-stone-300 p-6 review-card rounded-lg shadow-2xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={client2} alt="" />
            </div>
          </div>
          <h4 className="text-2xl font-bold mb-5 mt-2">Rafsan Habib</h4>
          <div className="flex justify-center text-2xl mb-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <p className="text-lg">
            Work was pretty good. They are very good at their job and to me.
            Loved their work, even from contact to final service. They were very
            sincere until giving. Out of 10 I will recommend 7 people for this
            service. I will do to take this service. Best wishes to them.
          </p>
        </div>
        <div className="bg-stone-300 p-6 review-card rounded-lg shadow-2xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={client3} alt="" />
            </div>
          </div>
          <h4 className="text-2xl font-bold mb-5 mt-2">Abrar Rafid Noor</h4>
          <div className="flex justify-center text-2xl mb-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <p className="text-lg">
            It was a nice experience to have them on the occasion of our
            wedding. They worked hard and tried to give a satisfactory result.
            Excellent equipments also enhanced the quality of work. Editing was
            up to the mark, but there were some points in editing that looked a
            bit awkward and bizzarred to me that shouldn't been in the first
            place. I wish them all the best in their future endeavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
