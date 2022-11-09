import React from "react";
import useTitle from "../../Hooks/useTitle";
import "./AddService.css";

const AddService = () => {
  useTitle("Add Service");

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const photoUrl = form.photoUrl.value;
    const price = "$" + form.price.value;
    const desc = form.desc.value;
    const rating = 0.0;

    const newService = {
      serviceName: serviceName,
      image: photoUrl,
      rating: rating,
      price: price,
      desc: desc,
    };
    console.log(newService);
  };

  return (
    <div className="mt-16 mb-16">
      <h1 className="text-5xl text-center mb-10 mt-10 services-header font-bold">
        Add a Service
      </h1>
      <form
        onSubmit={handleAddService}
        className="max-w-screen-lg mx-auto border border-gray-400 rounded-xl p-8 add-service-container"
      >
        <div className="flex justify-between">
          <div className="form-control w-full mr-5">
            <label className="label text-lg font-medium">
              <span className="label-text">Service Name</span>
            </label>
            <input
              required
              type="text"
              name="serviceName"
              placeholder="Name of the service"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label text-lg font-medium">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              required
              type="text"
              name="photoUrl"
              placeholder="URL link"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div>
          <div className="form-control w-1/4 mr-5">
            <label className="label text-lg font-medium">
              <span className="label-text">Service Price (numbers only)</span>
            </label>
            <input
              required
              type="text"
              name="price"
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
              required
              name="desc"
              className="textarea textarea-bordered"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn hover:bg-slate-800 mt-5">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
