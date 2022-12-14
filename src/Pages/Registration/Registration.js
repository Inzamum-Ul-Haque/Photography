import React, { useContext, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Registration = () => {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Registration");

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.fullname.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Password doesn't match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = {
          userEmail: result.user.email,
        };

        fetch("https://service-review-server-seven-tau.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            form.reset();
            updateUserData(fullname, photoUrl);
            navigate("/");
          });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });

    const updateUserData = (fullName, photoUrl) => {
      const profile = {
        displayName: fullName,
        photoURL: photoUrl,
      };

      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    };
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 mt-10 mb-10 sm:px-6 lg:px-8 signin-container">
      <div className="w-full max-w-md space-y-8 border border-gray-500 rounded-md p-12 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create An Account
          </h2>
        </div>
        <form onSubmit={handleCreateUser} className="text-lg mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label className="sr-only">Your fullname</label>
              <input
                name="fullname"
                type="text"
                required
                className="relative block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 mb-3"
                placeholder="Your fullname"
              />
            </div>
            <div>
              <label className="sr-only">Photo URL</label>
              <input
                name="photoUrl"
                type="text"
                className="relative block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 mb-3"
                placeholder="Paste your photo url link"
              />
            </div>
            <div>
              <label className="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                required
                className="relative block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 mb-3"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 mb-3"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="sr-only">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                required
                className="relative block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 mb-3"
                placeholder="Confirm Password"
              />
              <p className="text-red-600 text-base text-left mb-2">{error}</p>
            </div>
            <div className="flex items-center">
              <input
                onClick={handleAccepted}
                name="accept"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:text-slate-900"
              />
              <label className="ml-2 block text-sm ">
                Accept Our{" "}
                <span className="text-sky-900 cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
          </div>

          <div>
            <button
              disabled={!accepted}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-900 py-2 px-4 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiFillLock />
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
