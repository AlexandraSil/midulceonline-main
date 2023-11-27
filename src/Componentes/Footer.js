import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      
      <strong>Copyright © 2023 <Link to={"https://adminlte.io"}>MidulceOnline</Link>. </strong>{" "}All rights reserved.
    </footer>
  );
};

export default Footer;
