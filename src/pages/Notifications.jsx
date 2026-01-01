import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { MdDelete, MdMarkChatRead } from "react-icons/md";

const Notifications = () => {
  const [notify, setNotify] = useState(false);
  const [markAsRead, setMarkAsRead] = useState(false);

  const handleMarkAsRead = () => {
    setMarkAsRead(true);
  };

  const handleDelete = () => {
    setNotify(false);
  };

  const showNotification = (e) => {
    e.preventDefault()
    setNotify(true);
  };

  return (
    <section>
      <h1
        onClick={showNotification}
        className="text-3xl relative cursor-pointer font-bold flex items-center gap-3 mb-3"
      >
        Notifications <BiBell />
        {notify && (
          <div className="top-1 left-[212px] absolute  h-[10px] rounded-full w-[10px] bg-[#ff6600]"></div>
        )}
      </h1>
      {notify ? (
        <p className="flex justify-center items-center bg-gray-400 p-4 text-xl">
          You have 1 unread Notification
        </p>
      ) : (
        <p className="flex justify-center items-center bg-gray-400 p-4 text-xl">
          No new Notification
        </p>
      )}
      {notify && (
        <div
          className={`${
            markAsRead && "bg-gray-300"
          } flex items-center justify-between bg-green-300 p-2 mt-3 px-6`}
        >
          <p className={` ${markAsRead && "font-[400]"} text-lg font-bold`}>
            We just added new features to our website, Tap to check it out!
          </p>

          <div className="flex gap-4 items-center">
            <button
              onClick={handleMarkAsRead}
              className="flex items-center gap-1"
            >
              <MdMarkChatRead />
              Mark as Read
            </button>
            <button onClick={handleDelete} className="flex items-center gap-1">
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Notifications;
