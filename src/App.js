import React,{Fragment} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CrearCuenta from "./Paginas/auth/CrearCuenta";
import Login from "./Paginas/auth/login";
import Home from "./Paginas/Home";
import ProyectosAdmin from "./Paginas/Proyectos/ProyectosAdmin";
import ProductosCrear from "./Paginas/Proyectos/ProductosCrear";
import ProductosEditar from "./Paginas/Proyectos/ProductosEditar";
import Index from "./Paginas/Index";
import Chocolates from "./Paginas/Proyectos/Chocolates";
import Galletas from "./Paginas/Proyectos/Galletas";
import Gomitas from "./Paginas/Proyectos/Gomitas";
import Paquetes from "./Paginas/Proyectos/Paquetes";
import Jugos from "./Paginas/Proyectos/Jugos";
import Gaseosas from "./Paginas/Proyectos/Gaseosas";



function App(){
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element ={<Index/>}/>
          <Route path="/login" exact element ={<Login/>}/>
          <Route path="crear-cuenta" exact element ={<CrearCuenta/>}/>
          <Route path="/home" exact element ={<Home/>}/>
          <Route path="/proyectos-admin" exact element ={<ProyectosAdmin/>}/>
          <Route path="/produtos/crear" exact element ={<ProductosCrear/>}/>
          <Route path="/produtos/editar/:idproducto" exact element ={<ProductosEditar/>}/>
          <Route path="/chocolates" exact element ={<Chocolates/>}/>
          <Route path="/galletas" exact element ={<Galletas/>}/>
          <Route path="/gomitas" exact element ={<Gomitas/>}/>
          <Route path="/paquetes" exact element ={<Paquetes/>}/>
          <Route path="/jugos" exact element ={<Jugos/>}/>
          <Route path="/gaseosas" exact element ={<Gaseosas/>}/>

          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;