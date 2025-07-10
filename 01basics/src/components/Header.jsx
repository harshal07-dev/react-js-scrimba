import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-red-400 flex justify-center items-center h-20 text-white">
      <FaGlobeAfrica className="text-5xl" />
      <h1 className="text-4xl">Travel Journel.</h1>
    </header>
  );
};

export default Header;
