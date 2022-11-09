import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col justify-center error-container items-center">
        <h1 className="font-extrabold text-9xl">Oops!</h1>
        <h3 className="font-bold text-2xl mt-5">404 - Page Not Found</h3>
        <p className="mt-3 font-medium">
          The page you are looking for might have been removed or it's
          temporarily unavailable.
        </p>
        <Link to="/">
          <button className="btn hover:bg-slate-800 w-max mt-5 rounded-3xl">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
