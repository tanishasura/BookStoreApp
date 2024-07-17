import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    // console.log("Form data:", formData);
   
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
      console.log("Form data:", formData);
    };
  return (
    <>
    <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
    <div className="w-[600px]">
  <div className="">
    <form onSubmit={handleSubmit} method="dialog">
 
    <h1 className="font-bold text-4xl">Contact Us</h1>
    <div className="mt-4 space-y-2 text-xl"> 
      <span>Name</span>
      <br />
      <input
        type="text"
        placeholder="Enter your name"
        className="w-96 px-3 py-1 border rounded-md outline-none"
        id="name"
        onChange={handleChange}
      />
       <br />
        {errors.nameRequired && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
    </div>

    <div className="mt-4 space-y-2 text-xl">
      <span>Email</span>
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        className="w-96 px-3 py-1 border rounded-md outline-none"
        id="email"
        onChange={handleChange}
      />
       <br />
        {errors.emailRequired && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
    </div>

    <div className="mt-4 space-y-2 text-xl">
      <span>Message</span>
      <br />
      <textarea
        type="text"
        placeholder="Type your message"
        className="w-96 px-3 py-1 border rounded-md outline-none"
        id="message"
        onChange={handleChange}
      />
       <br />
        {errors.messageRequired && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
    </div>

    <div className="flex mt-5">
      <button className="text-xl bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
        Submit
      </button>
     
    </div>
    </form>
  </div>
</div>
    </div>

</>
  );
}
