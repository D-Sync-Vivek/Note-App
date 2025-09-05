"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const page = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false)

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
  }, [notes]);

  const deleteNote = async (id) => {
    try {
      console.log("Entered in try function");
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      const json = await res.json();
      if (res.ok) {
        toast("Note Delete");
      } else {
        toast("Error Deleting Note");
      }
    } catch (err) {
      console.error("Error Deleting the Note.");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col justify-center items-center mt-10 md:w-1/2 md:mx-auto m-3 rounded-xl p-3 py-10 bg-white shadow-xl border-1 border-gray-200">
        <h1 className="text-2xl font-semibold mb-5">All Notes</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {notes.length === 0 && (
              <div className="text-center">
                <div>Empty Here</div>

                <Link
                  href="/?focus=title"
                  className="underline text-blue-400 text-center decoration-wavy hover:text-blue-700"
                >
                  Add Note
                </Link>
              </div>
            )}
            {notes.map((note) => (
              <li
                key={note._id}
                className="flex gap-2 w-[80vw] md:w-[45vw] justify-between border-1 border-gray-200 mb-1 p-2 rounded-md items-start"
              >
                <div
                  className={`flex flex-col transition-all duration-300 ${
                    expanded ? "w-[69vw] md:[50vw]" : "max-w-[200px]"
                  }`}
                  onClick={() => setExpanded(!expanded)}
                >
                  <strong>{note.title}</strong>
                  <p
                    className={`${
                      expanded ? "break-words whitespace-pre-wrap" : "truncate"
                    }`}
                  >
                    {note.content}
                  </p>
                </div>

                <div
                  className="shrink-0 rounded-md hover:bg-gray-200"
                  onClick={() => deleteNote(note._id)}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/jzinekkv.json"
                    trigger="hover"
                    colors="primary:#242424,secondary:#242424"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default page;
