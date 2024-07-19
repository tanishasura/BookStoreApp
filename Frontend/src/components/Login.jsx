import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "./API";
import toast from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  //   console.log("Form data:", formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset errors
    setErrors({});
    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailRequired: true,
      }));
      return;
    }
    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordRequired: true,
      }));
      return;
    }

    try {
      const res = await Api.login(formData.email, formData.password);
      if (res.success === true) {
        toast.success("Loggedin Successfully!");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.user));
        }, 1000);
      }
    } catch (error) {
      console.log("error:", error);
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
        setTimeout(() => {
          
        }, 2000);
      }
    }
  };

  return (
    <div className="">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-3xl">Login</h3>
            <div className="mt-4 space-y-2 text-xl">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                id="email"
                onChange={handleChange}
              />
              <br />
              {errors.emailRequired && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2 text-xl">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                id="password"
                onChange={handleChange}
              />
              <br />
              {errors.passwordRequired && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="text-xl bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p className="text-xl">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
