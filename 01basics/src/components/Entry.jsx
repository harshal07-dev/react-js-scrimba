import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Entry = () => {
  return (
    <article className="flex">
      <img
        src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg"
        alt="mountain"
        className="w-60 h-65 object-cover p-5 rounded-lg"
      />
      <div className="flex flex-col justify-center bg-yellow-200 h-59 rounded-md p-3 mt-5 w-100">
        <FaMapMarkerAlt className="text-red-600 text-xl" />
        <span className="">Japan</span>
        <a href="#" className="underline text-blue-500 font-semibold">
          View on google map
        </a>
        <h1 className="font-bold text-xl">Mount Fuji</h1>
        <p className="font-semibold text-gray-600">
          13 Jun, 2025 - 17 Jun, 2025
        </p>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776
          meters(12,380 feet). Mount Fuji is the single most popular tourist
          site in Japan, for Japanease and foreign tourists.
        </p>
      </div>
    </article>
  );
};

export default Entry;
