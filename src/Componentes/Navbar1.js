import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
    return (
        <nav className="navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <div className="titulo">
      <h1 className="titulo">MiDulceOnline</h1>
    </div>  

    <li className="nav-item d-none d-sm-inline-block">
      <a href="/crear-cuenta" className="nav-link">Registrate</a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link to={"#"} className="nav-link" data-widget="fullscreen" role="button">
        
      </Link>
    </li>
  </ul>
</nav>
    );
  }

export default Navbar1;