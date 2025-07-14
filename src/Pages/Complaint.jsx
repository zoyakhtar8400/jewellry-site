import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Complaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    complaint: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.complaint) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setMessage(
        "Complaint submitted successfully! We'll get back to you soon."
      );
      setFormData({ name: "", phoneNumber: "", complaint: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md  rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          RAISE COMPLAINT
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            ></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            ></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="complaint"
              className="block text-sm font-medium text-gray-700 mb-2"
            ></label>
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm resize-none"
              placeholder="Please describe your complaint in detail..."
              required
            />
          </div>

          {message && (
            <div
              className={`text-center text-sm p-3 rounded-md ${
                message.includes("successfully")
                  ? "bg-green-50 text-green-600 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-gray-600 text-white py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors shadow-md"
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
