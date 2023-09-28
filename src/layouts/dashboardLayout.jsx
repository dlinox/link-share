import React from "react";
import Navbar from "../components/Navbar";

//useSignOut
const DashboardLayout = ({ children }) => {

  

  return (
    <div>
      
      <Navbar />
      <div className="w-full md:max-w-5xl mx-auto p-4 ">

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
