import React, { useContext, useEffect, useState } from "react";
import "./MyReviews.css";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReviews = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  useTitle("My Reviews");

  const handleEditReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const editedReview = form.editedReview.value;

    const updatedReview = {
      updated: editedReview,
      reviewedAt: new Date().toString(),
    };

    fetch(`http://localhost:5000/review/${updateId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success(data.message);
          form.reset();
          document.getElementById("my-edit-modal").checked = false;
          // if (editedReview.length > 20) {
          //   document.getElementById("review-text").innerText =
          //     editedReview.slice(0, 20) + "...";
          // } else {
          //   document.getElementById("review-text").innerText = editedReview;
          // }
          window.location.reload();
        } else {
          toast.error("An error occurred!");
        }
      });
  };

  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Do you want to delete this review?");
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            toast.success(data.message);
            const remaining = myReviews.filter((review) => review._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  const handleUpdateId = (id) => {
    setUpdateId(id);
  };

  const handleSeeComment = (comment) => {
    document.getElementById("comment").innerText = comment;
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/myReviews?uid=${user.uid}&email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return signOutUser();
        }
        return res.json();
      })
      .then((data) => setMyReviews(data.data));
  }, [user.uid, signOutUser, user.email]);

  return (
    <div className="my-reviews">
      <h1 className="text-5xl text-center mb-10 mt-10 services-header font-bold">
        My Reviews
      </h1>
      {myReviews.length === 0 ? (
        <p className="text-2xl text-gray-500 font-bold">
          No reviews were added!
        </p>
      ) : (
        <div className="max-w-screen-xl mx-auto mb-16 my-reviews-container overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Review</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((review) => (
                <tr key={review._id}>
                  <td className="text-gray-500 font-bold">
                    {review?.serviceName}
                  </td>
                  <td id="review-text" className="text-gray-500 font-bold">
                    <label
                      className="cursor-pointer hover:underline"
                      htmlFor="comment-modal"
                      onClick={() => handleSeeComment(review?.review)}
                    >
                      {review?.review.length > 20
                        ? review?.review.slice(0, 20) + "..."
                        : review?.review}
                    </label>
                  </td>
                  <td className="text-gray-500 font-bold">
                    {review?.reviewedAt.slice(0, 24)}
                  </td>
                  <td>
                    <label htmlFor="my-edit-modal">
                      <AiOutlineEdit
                        onClick={() => handleUpdateId(review._id)}
                        className="text-xl cursor-pointer text-gray-600 hover:text-slate-900"
                      />
                    </label>
                  </td>
                  <td>
                    <MdDelete
                      onClick={() => handleDeleteReview(review._id)}
                      className="text-xl cursor-pointer text-gray-600 hover:text-red-600"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      )}

      {/* edit modal */}
      <>
        <input type="checkbox" id="my-edit-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Edit Review</h3>
              <div className="modal-action my-auto">
                <label
                  htmlFor="my-edit-modal"
                  className="cursor-pointer text-xl"
                >
                  <AiOutlineClose />
                </label>
              </div>
            </div>
            <form onSubmit={handleEditReview}>
              <div>
                <textarea
                  name="editedReview"
                  className="textarea textarea-bordered w-full mb-3 mt-5"
                  placeholder="Edit your review"
                ></textarea>
              </div>
              <button type="submit" className="btn hover:bg-slate-800">
                Update
              </button>
            </form>
          </div>
        </div>
      </>

      {/* comment modal */}
      <>
        <input type="checkbox" id="comment-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="modal-action my-auto">
              <label htmlFor="comment-modal" className="cursor-pointer text-xl">
                <AiOutlineClose />
              </label>
            </div>
            <div className="text-left">
              <p id="comment"></p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyReviews;
