import React from "react";
import { Outlet, Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Header1 from "../Header/Header1";

const Layout = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header1 />
      <Header />
      <div style={{ flex: "1", padding: "20px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
