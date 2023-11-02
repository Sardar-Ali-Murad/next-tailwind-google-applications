import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wrap = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Wrap;
