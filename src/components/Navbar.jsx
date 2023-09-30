import React from "react";
import { useAuth } from "../hooks/useAuth";
import Dropdown from "./Dropdown"; // Importa el componente Dropdown


const Navbar = () => {
  const { useSignOut } = useAuth();
  return (
    <nav className="bg-gray-800 py-6 px-20 text-white">
      <div className="flex justify-end items-center">

        <button onClick={useSignOut}>
          Salir
        </button>
       
        {/* <div className="space-x-4">
          <Dropdown />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
