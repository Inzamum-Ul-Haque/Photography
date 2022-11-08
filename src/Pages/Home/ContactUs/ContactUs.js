import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container text-white">
      <div className="image-overlay pt-10 pb-10">
        <div className="contact-header text-center mb-10">
          <h2 className="text-5xl text-center mb-2 font-bold">Contact Us</h2>
          <p className="text-2xl font-semibold">
            For hiring services or to give a review or any kind of questions,
            please contact us or message us.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 contact-body max-w-screen-xl mx-auto">
          <div className="flex flex-col justify-center">
            <div className="flex mb-16">
              <div className="bg-white rounded-full w-14 flex justify-center items-center mr-5 shrink-0">
                <GrLocation />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">Address</h3>
                <p className="text-base font-semibold">
                  Road-03, House-10, Block-A, Mirpur-11, 1216
                </p>
              </div>
            </div>
            <div className="flex mb-16">
              <div className="bg-white rounded-full text-black w-14 flex justify-center items-center mr-5 shrink-0">
                <BsFillTelephoneFill />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">Phone</h3>
                <p className="text-base font-semibold">
                  +8801750414709, 8012489
                </p>
              </div>
            </div>
            <div className="flex mb-16">
              <div className="bg-white rounded-full text-black w-14 flex justify-center items-center mr-5 shrink-0">
                <AiOutlineMail />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">Email</h3>
                <p className="text-base font-semibold">
                  photographer.service@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full bg-white rounded-none bg-transparent">
            <h1 className="text-4xl font-bold">Send Message</h1>
            <div className="card-body text-black">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="form-control mt-6 w-1/4">
                <button className="btn hover:bg-slate-800">
                  Send <AiOutlineSend className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
