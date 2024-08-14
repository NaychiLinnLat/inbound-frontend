import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Userlayout = () => {
  return (
    <div className="bg-slate tracking-[-0.035em]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Userlayout;
