import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add validation or backend API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-2 sm:px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-2 tracking-wide">
          CREATE ACCOUNT
        </h2>

        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-semibold tracking-widest uppercase text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-black px-3 py-2 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-xs font-semibold tracking-widest uppercase text-gray-700 mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-black px-3 py-2 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold tracking-widest uppercase text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-black px-3 py-2 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-semibold tracking-widest uppercase text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-black px-3 py-2 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 mt-2 uppercase tracking-widest text-sm hover:bg-gray-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Signup;
