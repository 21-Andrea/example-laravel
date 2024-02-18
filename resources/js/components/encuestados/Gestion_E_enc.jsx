import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import sello from '../../../assets/img/sello-instituto.png';

const endpoint = 'http://localhost:8000/api/encuestado'
const endpoint2 = 'http://localhost:8000/api'

const Gestion_E_enc = () => {


    const [encuestado, setEncuestado] = useState([])
    useEffect(() => {
        getAllEncuestado()
    }, [])


    const getAllEncuestado = async () => {
        const response = await axios.get(endpoint)
        setEncuestado(response.data)
    }

    const deleteEncuestado = async (id,cedula_U) => {

        await axios.delete(`${endpoint2}/encuestado/${id}`)
        await axios.delete(`${endpoint2}/usuario/${cedula_U}`)
        getAllEncuestado();
        window.location.reload();

        setTimeout(() => {
            navigate("/Encuestados/Gestion");
            window.location.reload();
          }, 2000);
    }

  const handleButtonClick = () => {

    navigate("/Encuestado/Login");
    window.location.reload();
};

    return (
        <div>
            <center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
            <br></br>
            <h2 class="mb-0 text-uppercase" style={{ color: 'black' }} >Gestión de Encuestados</h2>
            <br></br>
            <div class="card shadow">
                <div class="card-body">
                    <table class="table table-hover table-borderles" id='1'>
                        <thead class="thead-dark">
                            <tr>
                                <th class="collapse show  border" >ID</th>
                                <th class="collapse show  border" >Empresa</th>
                                <th class="collapse show  border" >Cargo</th>
                                <th class="collapse show  border" >Ciudad</th>
                                <th class="collapse show  border" >Celular</th>
                                <th class="collapse show  border" >Correo</th>
                                <th class="collapse show  border" >Cédula</th>
                                <th class="collapse show  border" >Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {encuestado.map((encuestado) => (
                                <tr class="collapse show  " key={encuestado.id}>
                                    <td >{encuestado.id}</td>
                                    <td > {encuestado.Empresa} </td>
                                    <td > {encuestado.Cargo} </td>
                                    <td > {encuestado.Ciudad} </td>
                                    <td > {encuestado.Celular} </td>
                                    <td > {encuestado.Correo} </td>
                                    <td>  {encuestado.cedula_U} </td>

                                    <td>
                                        <div id='botones F'>
                                            <Link to={`/Encuestado/Editar/${encuestado.id}`} className='btn bg-light  mx-2'>Editar</Link>
                                            <button onClick={() => deleteEncuestado(encuestado.id,encuestado.cedula_U )} className='btn bg-secondary mx-2'>Eliminar</button>
                                            <Link to="/Encuestado/Login" onClick={handleButtonClick} className='btn bg-dark text-white mx-1'>Crear</Link>
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

export default Gestion_E_enc

