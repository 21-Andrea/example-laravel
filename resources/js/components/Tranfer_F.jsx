import axios from 'axios'
import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'
import sello from '../../assets/img/sello-instituto.png';
const endpoint = 'http://localhost:8000/api/encuestas'

const Tranfer_F = () => {

    const [loading, setLoading] = useState(true);
    const [proveedores, setProveedores] = useState([]);
    const [articulos, setArticulos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [users, setUsers] = useState([]);
    const [ventas, setVentas] = useState([]);
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            await listarProveedor();
            await listarArticulos();
            await listarCompras();
            await listarVenta();
            await listarMarca();
            await listarUser();
            setLoading(false);
          } catch (error) {
            console.error('Error al obtener datos:', error);
            setLoading(false);
          }
        };
        fetchData();
    }, []);

/*
    useEffect(() => {
        listarProveedor();
        listarArticulos();
        listarCompras();
        listarVenta();
        listarMarca();
        listarUser();
      }, []);
*/


  const listarProveedor = () => {
    fetch('http://localhost:8000/api/ejecutarConsulta_1')
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {

        setProveedores(datosrespuesta); // Cambio aquí
        console.log(proveedores);
      })
      .catch(console.log);
  };

  const listarArticulos = () => {
    fetch('http://localhost:8000/api/ejecutarConsulta_2')
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log(datosrespuesta);
        setArticulos(datosrespuesta); // Cambio aquí
      })
      .catch(console.log);
  };

  const listarCompras = () => {
    fetch('http://localhost:8000/api/ejecutarConsulta_3')
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log(datosrespuesta);
        setCompras(datosrespuesta); // Cambio aquí
      })
      .catch(console.log);
  };


  const listarMarca = () => {
    fetch('http://localhost:8000/api/ejecutarConsulta_6')///
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log(datosrespuesta);
        setMarcas(datosrespuesta); // Cambio aquí
      })
      .catch(console.log);
  };
  const listarUser = () => {
    fetch('http://localhost:8000/api/ejecutarConsulta_4')
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log(datosrespuesta);
        setUsers(datosrespuesta); // Cambio aquí
      })
      .catch(console.log);
  };
  const listarVenta = () => {
    fetch('http://localhost:8000/api/ejecutarConsulta_5')
      .then((respuesta) => respuesta.json())
      .then((datosrespuesta) => {
        console.log(datosrespuesta);
        setVentas(datosrespuesta); // Cambio aquí
      })
      .catch(console.log);
  };






  if (loading) {
    return <p>Cargando...</p>;
  }
  return (

    <div>
<center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>

      <h3 className="text-center tittles"></h3>



			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						{ proveedores }<br></br>
						<small>Cantidad Encuestas</small>
					</span>
				</div>
				<i class="zmdi zmdi-account tile-icon"></i>
			</article>

			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						{ articulos }<br></br>
						<small>Cantidad de preguntas</small>
					</span>
				</div>
				<i class="zmdi zmdi-washing-machine tile-icon"></i>
			</article>

			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						{ compras }<br></br>
						<small>Cantidad de encuestados</small>
					</span>
				</div>
				<i class="zmdi zmdi-label tile-icon"></i>
			</article>

			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						{users}<br></br>
						<small>Cantidad de Usuarios</small>
					</span>
				</div>
				<i class="zmdi zmdi-folder-person tile-icon"></i>
			</article>

			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						{ ventas }<br></br>
						<small>Cantidad de Respuestas</small>
					</span>
				</div>
				<i class="zmdi zmdi-shopping-cart tile-icon"></i>
			</article>

			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						{ marcas }<br></br>
						<small>Cantidad de Categorias</small>
					</span>
				</div>
				<i class="zmdi zmdi-case tile-icon"></i>

			</article>
            </div>
  )

  };
export default Tranfer_F;
