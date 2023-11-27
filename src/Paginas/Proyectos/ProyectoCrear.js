import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";

const ProyectoCrear = () => {
  const navigate = useNavigate();

  const [productos, setProductos] = useState({
    id: 1,
    nombre: "",
    precio: "",
  });

  const [contadorId, setContadorId] = useState(1);

  const agregarProducto = () => {
    setProductos({
      ...productos,
      id: contadorId,
    });

    setContadorId(contadorId + 1);
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setProductos({
      ...productos,
      [e.target.name]: e.target.value,
    });
  };

  const crearProducto = async () => {
    const data = {
      nombre: productos.nombre,
      precio: productos.precio,
    };

    try {
      const response = await APIInvoke.invokePOST("/Productos", data);
      const idProductos = response._id;

      if (!idProductos) {
        mostrarMensajeError("El producto no fue creado correctamente.");
      } else {
        mostrarMensajeExito("El producto fue creado correctamente.");
        navigate("/proyectos-admin");
        setProductos({
          nombre: "",
          precio: "",
        });
      }
    } catch (error) {
      mostrarMensajeError("Hubo un error al crear el producto.");
    }
  };

  const mostrarMensajeExito = (mensaje) => {
    swal({
      title: "Información",
      text: mensaje,
      icon: "success",
      buttons: {
        confirm: {
          text: "Ok",
          value: true,
          visible: true,
          className: "btn btn-success",
          closeModal: true,
        },
      },
    });
  };

  const mostrarMensajeError = (mensaje) => {
    swal({
      title: "Error",
      text: mensaje,
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
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearProducto();
    agregarProducto();
  };

  const { nombre, precio } = productos;
  return (
    <div className="wrapper">
      <Navbar/>
      <SidebarContainer/>
      <div className="content-wrapper">
        <ContentHeader
          Titulo={"Creación de Productos"}
          breadcrumb1={"Lista de Productos"}
          breadcrumb2={"Creación"}
          ruta1={"/proyectos-admin"}
        />
        <section className="content">
          <div className="card-header">
            <h3 className="card-title">
              <Link
                to="/proyectos/Crear"
                type="button"
                className="btn btn-block btn-primary btn-sm"
              >
                Crear Producto
              </Link>
            </h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese el Nombre del producto"
                    value={nombre}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="precio">Precio:</label>
                  <input
                  type="text"
                  className="form-control"
                  id="precio"
                  name="precio"
                placeholder="Ingrese el Precio del producto"
                value={precio}
                onChange={onChange}
                required
                />

                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Crear
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default ProyectoCrear;
