import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../Assets/images/clients/pngwing.com.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceReviews = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handlePostReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const newReview = {
      service_id: data._id,
      serviceName: data.serviceName,
      username: user.displayName,
      userId: user.uid,
      userImage: user.photoURL,
      review: review,
      reviewedAt: new Date().toString(),
    };

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success(data.message);
          const newComment = [...reviews, newReview];
          setReviews(newComment);
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review/${data._id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data))
      .catch((error) => console.error(error));
  }, [data._id]);

  return (
    <div>
      <h1 className="text-5xl text-start mb-10 mt-10 service-details-header font-bold">
        Reviews
      </h1>
      {reviews.length === 0 ? (
        <p className="text-start text-xl font-semibold text-gray-500">
          Not reviewed!
        </p>
      ) : (
        reviews.map((review) => (
          <div
            key={review._id}
            className="border border-slate-900 rounded-2xl p-5 mb-6"
          >
            <div className="flex mb-2">
              <div className="avatar mr-5">
                {review.userImage ? (
                  <div className="w-16 rounded-full">
                    <img src={review?.userImage} alt="" />
                  </div>
                ) : (
                  <div className="w-16 rounded-full">
                    <img src={img} alt="" />
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-xl text-start">{review?.username}</h4>
                <p className="text-gray-500 text-sm text-start">
                  {review.reviewedAt.slice(0, 24)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-start">{review.review}</p>
            </div>
          </div>
        ))
      )}
      {!user ? (
        <p className="text-lg text-left mt-5">
          Please{" "}
          <Link className="font-bold" to="/signin">
            Login
          </Link>{" "}
          to give a review!
        </p>
      ) : (
        <form
          onSubmit={handlePostReview}
          className="mt-10 flex flex-col justify-start"
        >
          <textarea
            name="review"
            required
            className="textarea textarea-bordered w-full"
            placeholder="Add a review"
          ></textarea>
          <button type="submit" className="btn hover:bg-slate-800 w-max mt-2">
            Share
          </button>
        </form>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ServiceReviews;
