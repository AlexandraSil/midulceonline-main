import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Componentes/Navbar1";
import "../../src/css/estilos.css"

const Index = () => {
  return (
    <div class="clasindex">
      <Navbar></Navbar>

<section className="catalogo">
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>Chocolates</h3>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div className="icon">
          
        </div>
        <div className="seguir">
          <Link to={"/chocolates"} className="small-box-footer">
            <div className="dulces">
              Ver <i className="fas fa-arrow-circle-right" />
            </div>
          </Link>
        </div>
      </div>
    </div>

    
    
    <div className="col-lg-4 col-md-6">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>Galletas</h3>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div className="icon">
          
        </div>
        <div className="seguir">
          <Link to={"/galletas"} className="small-box-footer">
            <div className="dulces">
              Ver  <i className="fas fa-arrow-circle-right" />
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>Jugos</h3>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div className="icon">
          
        </div>
        <div className="seguir">
          <Link to={"/jugos"} className="small-box-footer">
            <div className="dulces">
              Ver  <i className="fas fa-arrow-circle-right" />
            </div>
          </Link>
        </div>
      </div>
    </div>

    
  </div>
</section>

<section className="catalogo">
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>Gaseosas</h3>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div className="icon">
          
        </div>
        <div className="seguir">
          <Link to={"/gaseosas"} className="small-box-footer">
            <div className="dulces">
              Ver  <i className="fas fa-arrow-circle-right" />
            </div>
          </Link>
        </div>
      </div>
    </div>

   
    
    <div className="col-lg-4 col-md-6">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>Paquetes</h3>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div className="icon">
          
        </div>
        <div className="seguir">
          <Link to={"/paquetes"} className="small-box-footer">
            <div className="dulces">
              Ver <i className="fas fa-arrow-circle-right" />
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>Gomitas</h3>
          <p>&nbsp;&nbsp;</p>
        </div>
        <div className="icon">
          
        </div>
        <div className="seguir">
          <Link to={"/gomitas"} className="small-box-footer">
            <div className="dulces">
              Ver <i className="fas fa-arrow-circle-right" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      
</div>
  );
};

export default Index;