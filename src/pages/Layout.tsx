import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { GameQuery } from "../pages/HomePage";

const Layout = () => {

  return (
    <>
      {/* <NavBar onSearch={() => console.log(':(')}/> */}
      <Outlet />
    </>
  );
};

export default Layout;
