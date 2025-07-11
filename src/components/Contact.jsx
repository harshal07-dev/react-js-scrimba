import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = ({ avatar, name, email, number }) => {
  return (
    <div
      className="bg-blue-400 w-full max-w-xs sm:max-w-sm md:max-w-sm p-3 rounded-xl text-white 
          hover:scale-105 transform transition duration-300 hover:shadow-amber-50 cursor-pointer 
      flex flex-col justify-center items-center shadow-md mx-auto mt-6"
    >
      <img
        src={avatar}
        alt="profile"
        className="w-24 h-24 rounded-full border-2 border-white mb-4 object-cover"
      />

      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
        {name}
      </h2>

      <div className="flex items-center mb-1 text-sm sm:text-base">
        <IoCall className="text-lg sm:text-xl mr-2" />
        <span>{number}</span>
      </div>

      <div className="flex items-center text-sm sm:text-base text-center">
        <MdEmail className="text-lg sm:text-xl mr-2" />
        <span>{email}</span>
      </div>
    </div>
  );
};

export default Contact;
