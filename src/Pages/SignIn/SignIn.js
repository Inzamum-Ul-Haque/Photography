import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { AiFillLock } from "react-icons/ai";
import google from "../../Assets/logos/icons8-google-94.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../Hooks/useTitle";

const SignIn = () => {
  const { signInUser, providerLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || "/";
  useTitle("Sign In");

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 mt-10 mb-10 sm:px-6 lg:px-8 signin-container">
      <div className="w-full max-w-md space-y-8 border border-gray-500 rounded-md p-12 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to="/register"
              className="font-medium text-slate-900 hover:text-slate-800 ml-1"
            >
              Create an account
            </Link>
          </p>
        </div>
        <form onSubmit={handleSignIn} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label className="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <p className="text-red-600 text-base text-left mb-2">{error}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:text-slate-900"
              />
              <label className="ml-2 block text-sm ">Remember me</label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-gray-900 hover:text-gray-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-900 py-2 px-4 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiFillLock />
              </span>
              Sign in
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <span className="font-medium ml-1">Sign in using</span>
          </p>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="border border-gray-400 p-3 rounded-full hover:bg-gray-200"
        >
          <img className="w-10" src={google} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
