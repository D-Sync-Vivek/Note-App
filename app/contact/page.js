"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-xl w-full text-center bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us 📬</h1>
        <p className="text-gray-600 mb-6">
          Have questions, feedback, or suggestions?  
          We’d love to hear from you!
        </p>

        <form className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-gray-600">
          <p>Or reach out directly at:</p>
          <p className="font-medium text-blue-600">vivek.email@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
