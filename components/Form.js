"use client";
import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault(); // stop page reload
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const json = await res.json();
      

      if (res.ok) {
        setMessage("✅ Note Added Successful");
        setTitle("");
        setContent("");
      } else {
        setMessage("❌ Error: " + json.message);
      }
    } catch (err) {
      console.error("Error submitting note:", err);
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 justify-center items-center bg-white md:w-1/2 md:m-auto p-4 rounded-xl m-3"
    >
      <div className="title">
        <div>Title</div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Your Title"
          className="px-4 p-1 border-1 border-gray-500 rounded-md"
        />
      </div>
      <div className="content">
        <div>Content</div>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Enter Your Content"
          className="px-4 py-1 border-1 border-gray-500 rounded-md"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="border-1 px-3 rounded-full mt-2 bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Submitting" : "Submit"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
