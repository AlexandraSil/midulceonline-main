import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Componentes/Navbar";
import SidebarContainer from "../Componentes/SidebarContainer";
import ContentHeader from "../Componentes/ContentHeader";
import Footer from "../Componentes/Footer";
import "../../src/css/estilos.css"

const Home = () => {
  return (
    <div class="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">

        <ContentHeader

        />
        
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Dulces</h3>
                    <p>&nbsp;&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <div className="seguir">
                  <Link to={"/proyectos-admin"} className="small-box-footer">
                    <div className="dulces">
                    Ver Dulces <i className="fas fa-arrow-circle-right" />
                    </div>
                  </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
