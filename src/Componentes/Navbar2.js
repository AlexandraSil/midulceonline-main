import React from "react";
import { Link } from "react-router-dom";


const NavbarChocolate = () => {
    return (
        <nav className="navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <div className="titulo">
      <h1 className="titulo">Chocolates</h1>
    </div>  

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

export default NavbarChocolate;