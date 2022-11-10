import React, { useContext, useEffect, useState } from "react";
import "./MyReviews.css";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyReviews = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useTitle("My Reviews");

  // useEffect(() => {
  //   fetch(`http://localhost:5000/myReviews/${user?.email}`, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 401 || res.status === 403) {
  //         return signOutUser();
  //       }
  //       return res.json();
  //     })
  //     .then((data) => console.log(data));
  // }, [user?.email, signOutUser]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data.data));
  }, [user.uid, signOutUser]);

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
                  <td className="text-gray-500 font-bold">
                    {review?.review.length > 20
                      ? review?.review.slice(0, 20) + "..."
                      : review?.review}
                  </td>
                  <td className="text-gray-500 font-bold">
                    {review?.reviewedAt}
                  </td>
                  <td>
                    <label htmlFor="my-edit-modal">
                      <AiOutlineEdit className="text-xl cursor-pointer text-gray-600 hover:text-slate-900" />
                    </label>
                  </td>
                  <td>
                    <MdDelete className="text-xl cursor-pointer text-gray-600 hover:text-red-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* edit modal */}
      <>
        <input type="checkbox" id="my-edit-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">edit</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-edit-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyReviews;
