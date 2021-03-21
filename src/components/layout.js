import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center md:max-w-xl mt-2">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
