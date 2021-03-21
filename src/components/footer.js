import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <ul>
        <li style={{ listStyle: "none" }}>© 2021 jakesmith.info</li>
      </ul>
    </footer>
  );
};

export default Footer;
