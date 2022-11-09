import React from "react";
import useTitle from "../../Hooks/useTitle";
import "./AddService.css";

const AddService = () => {
  useTitle("Add Service");

  return (
    <div className="mt-16 mb-16">
      <h1 className="text-5xl text-center mb-10 mt-10 services-header font-bold">
        Add a Service
      </h1>
      <form className="max-w-screen-lg mx-auto border border-gray-400 rounded-xl p-8 add-service-container">
        <div className="flex justify-between">
          <div className="form-control w-full mr-5">
            <label className="label text-lg font-medium">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label text-lg font-medium">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="URL link"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div>
          <div className="form-control w-1/4 mr-5">
            <label className="label text-lg font-medium">
              <span className="label-text">Service Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div>
          <div className="form-control w-full mr-5">
            <label className="label text-lg font-medium">
              <span className="label-text">Description about the service</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <button className="btn hover:bg-slate-800 mt-5">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
