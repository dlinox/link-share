import React from "react";
import Dropdown from "./Dropdown"; // Importa el componente Dropdown

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-5 px-20 text-white">
      <div className="flex justify-between items-center">
        <div>Logo</div>
        <div className="space-x-4">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
