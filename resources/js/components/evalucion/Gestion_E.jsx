import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import sello from '../../../assets/img/sello-instituto.png';

const endpoint = 'http://localhost:8000/api/encuesta'
const endpoint2 = 'http://localhost:8000/api'

const Gestion_E = () => {

    const [encuesta, setEncuesta] = useState([])
    useEffect(() => {
        getAllEncuesta()
    }, [])


    const getAllEncuesta = async () => {
        const response = await axios.get(endpoint)
        setEncuesta(response.data)
    }

    const deleteEncuesta = async (id) => {

        await axios.delete(`${endpoint2}/encuestas/${id}`)
        getAllEncuesta();
        window.location.reload();

        setTimeout(() => {
            navigate("/Encuestado/Encuesta");
            window.location.reload();
          }, 2000);



    }
    const handleEditClick = () => {
        const url = `/Evaluacion/Editar/${encuesta.id}`;

        // Redirigir a la página de Laravel
        window.location.href = url;
      };

    return (

        <div>

            <center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
            <br></br>
            <h2 class="mb-0 text-uppercase" style={{ color: 'black' }} >Gestión de Evaluación  </h2>
            <br></br>
            <div class="card shadow">
                <div class="card-body">

                    <table class="table table-hover table-borderles" id='1'>
                        <thead class="thead-dark">
                            <tr>
                                <th class="collapse show  border" >ID</th>
                                <th class="collapse show  border" >Nombre</th>
                                <th class="collapse show  border" >Descripcion</th>
                                <th class="collapse show  border" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {encuesta.map((encuesta) => (
                                <tr class="collapse show  " key={encuesta.id}>
                                    <td >{encuesta.id}</td>
                                    <td > {encuesta.nombre} </td>
                                    <td> {encuesta.descripcion} </td>

                                    <td>
                                        <div id='botones F'>

                                        <Link to={`/Evaluacion/Editar/${encuesta.id}`}   className='btn bg-light mx-2' >Editar</Link>
                                            <button onClick={() => deleteEncuesta(encuesta.id)} className='btn bg-secondary mx-2'>Eliminar</button>
                                            <Link to="/Evaluacion/Añadir" className='btn bg-dark text-white mx-1'>Crear</Link>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Gestion_E

