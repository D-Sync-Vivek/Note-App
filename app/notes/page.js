"use client";

import React from "react";
import { useEffect, useState } from "react";
const page = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("/api/notes");
        const json = await res.json();
        setNotes(json.data);
      } catch (err) {
        console.error("Error fetching notes : ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 md:w-1/2 md:m-auto m-3 rounded-xl p-3 py-10 bg-white">
        <h1 className="text-2xl font-semibold mb-5">All Notes</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {notes.map((note) => (
              <li key={note._id}>
                <strong>{note.title}</strong> : {note.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default page;
