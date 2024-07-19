import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Api from "./API";
import toast from "react-hot-toast";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  // console.log("Form data:", formData);
  const navigate = useNavigate();

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
    if (!formData.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameRequired: true,
      }));
      return;
    }

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
      const res = await Api.signup(
        formData.name,
        formData.email,
        formData.password
      );
      if (res.success === true) {
        toast.success("Signup Successfully!");
        navigate("/");
      }
      localStorage.setItem("Users", JSON.stringify(res.user));
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h1 className="font-bold text-3xl text-center">Signup</h1>
              <div className="mt-4 space-y-2 text-xl">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  onChange={handleChange}
                />
                <br />
                {errors.nameRequired && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2 text-xl">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
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
                  id="password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  onChange={handleChange}
                />
                <br />
                {errors.passwordRequired && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-5">
                <button className="text-xl bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
                  <Login />
      </div>
    </>
  );
}
