import React from "react";

const about = () => {
  return (
    <>
      <div className="flex flex-col items-center w-[90vw] m-auto">
        <div className="text-center mt-10 text-3xl font-semibold mb-3">
          About Notes App 📝
        </div>
        <div className="text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-black">Notes App</span> — your
          simple place to jot down thoughts, reminders, and ideas.
        </div>
        <ul className="list-disc p-3 text-gray-700 space-y-2">
           <li>Create notes instantly with a title and content.</li>
          <li>See all your saved notes in a clean list view.</li>
          <li>Delete notes easily when you no longer need them.</li>
          <li>If it’s empty, just click <span className="font-bold">“Add Note”</span>to get started.</li>
        </ul>
        <p className="mt-6 text-gray-600">I have built this app to be fast, lightweight, and easy to use - so you can focus on your idea, not the tool.</p>
      </div>
    </>
  );
};

export default about;
