import React from "react";

function Button({ children, type = "button", onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" w-full flex justify-center py-2.5 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
}

export default Button;
