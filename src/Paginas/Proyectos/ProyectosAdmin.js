import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke"; 
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";



const ProyectosAdmin = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const response = await APIInvoke.invokeGET("/Productos");
      setProductos(response);
  }
  useEffect(()=>{
    obtenerProductos();
  },[])

  const Eliminarproducto = async (e,id) => {
    e.preventDefault();
  const response = await APIInvoke.invokeDELETE(`/Productos/${id}`);
  if (response) { 
    const msg = "Producto eliminado correctamente";
    swal({
      title: "Información",
      text: msg,
      icon: "success",
      buttons: {
        confirm: {
          text: "Ok",
          value: true,
          visible: true,
          className: "btn btn-primary",
          closeModal: true,
        },
      },
    });
    obtenerProductos();
  }else{
    const msg = " el Producto no eliminado correctamente";
    swal({
      title: "Error",
      text: msg,
      icon: "error",
      buttons: {
        confirm: {
          text: "Ok",
          value: true,
          visible: true,
          className: "btn btn-danger",
          closeModal: true,
        },
      },
    });
  }
}

// Función para dividir productos por categorías usando la API
const obtenerProductosPorCategoria = async () => {
  try {
    // Realizar la solicitud GET a la API para obtener los productos
    const response = await APIInvoke.invokeGET('/Productos');

    // Verificar si la respuesta contiene datos
    if (response && response.length > 0) {
      // Objeto para almacenar los productos categorizados
      const productosPorCategoria = {};

      // Iterar sobre cada producto en la respuesta
      response.forEach((producto) => {
        const { categoria } = producto;

        // Verificar si la categoría ya existe en el objeto
        if (!productosPorCategoria[categoria]) {
          // Si no existe, crear un arreglo vacío para esa categoría
          productosPorCategoria[categoria] = [];
        }

        // Agregar el producto a la categoría correspondiente
        productosPorCategoria[categoria].push(producto);
      });

      return productosPorCategoria;
    } else {
      console.log('No se encontraron productos.');
      return {}; // Devolver un objeto vacío si no hay datos
    }
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return {}; // Devolver un objeto vacío en caso de error
  }
};

// Llamar a la función para obtener los productos categorizados
obtenerProductosPorCategoria()
  .then((productosCategorizados) => {
    console.log('Productos por categoría:', productosCategorizados);
    // Aquí puedes manejar los productos categorizados según tus necesidades
  })
  .catch((error) => {
    console.error('Error:', error);
    // Manejar el error en caso de que falle la obtención de productos
  });

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          Titulo={"Listado de Productos Tipicos"}
          breadcrumb1={"inicio"}
          breadcrumb2={"Productos"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link to={"/produtos/crear"} className="btn btn-block btn-primary btn-sm">Crear Producto </Link>
              </h3>
            </div>
            <div className="card-body">
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Región</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.categoria}</td>
                      <td>{producto.region}</td>
                      <td>
                      <Link to={`/produtos/editar/${producto.id}@${producto.nombre},${producto.precio},${producto.categoria},${producto.region}`} 
                        className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                        <button onClick={(e)=> Eliminarproducto(e,producto.id )} className="btn btn-sm btn-danger">Eliminar</button>&nbsp;&nbsp;
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
     <Footer></Footer>
    </div>
  );
};

export default ProyectosAdmin;
