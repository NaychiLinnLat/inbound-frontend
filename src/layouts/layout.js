import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const Userlayout = () => {
  return (
    <div className="bg-slate tracking-[-0.035em]">
      <Heading />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Userlayout;
