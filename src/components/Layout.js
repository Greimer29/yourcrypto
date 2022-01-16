import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className="text-white">
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
