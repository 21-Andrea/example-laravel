
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sello from '../../../assets/img/logo_Cs1.png';

const endpoint = 'http://localhost:8000/api/administrador/'

const Editar_ad = () => {

    const [password, setDescription] = useState('')
    const [username, setusarname] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            password: password,
            username: username
        })
        navigate('/Administradores/Gestion')
    }


    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.password)
            setusarname(response.data.username)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    /*
       const navigate = useNavigate()
       const {id} = useParams()

       const update = async (e) => {
           e.preventDefault()
           await axios.put(`${endpoint}${id}`, {
               nombre: nombre,
               descripcion: descripcion
           })
           navigate('/')
       }

       useEffect( () =>{
           const getEncuestaById = async () => {
               const response = await axios.get(`${endpoint}${id}`)
               setNombre(response.data.nombre)
               setDescription(response.data.descripcion)
           }
           getEncuestaById()
           // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [] )
   */
    return (
        <div>

            <h1 class="mb-0 text-uppercase" style={{ color: 'black' }} >Editar Datos del Administrador  </h1>
            <br></br>
            <form onSubmit={update}>
                <center>
                <main class="main center col-md-16" id="1">
                    <div class="container center">
                        <div class=" justify-content-center">
                            <div class=" col-xl-10">

                                <div class="card shadow">
                                    <div class="card-body ">
                                        <div class="row ">
                                            <div class="col-20 text-center mb-20">
                                                <img src={sello} width="30%" height="180" class="navbar-brand-img mx-auto" alt="..." />
                                                <br></br><br></br>
                                                <h2 class="mb-0 text-uppercase" style={{ color: 'black' }} >Datos del Administrador a Modificar </h2>
                                            </div>
                                            <div class="col-md">
                                            <br></br>
                                                <p class="small text-muted text-uppercase mb-2">Ingrese la información requerida para la modificación</p>
                                                <p class="mb-4">
                                                <br></br>

                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Ingrese el Nombre de Usuario a Modificar </span>

                                                        </div>
                                                        <input
                                                            value={username}
                                                            onChange={(e) => setusarname(e.target.value)}
                                                            type='text'
                                                            className='form-control'
                                                        />
                                                    </div>
                                                    <br></br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Ingrese la Contraseña a Modificar </span>

                                                        </div>
                                                        <input
                                                            value={"Ingrese Nueva Contraseña"}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                            type='text'
                                                            className='form-control'
                                                        />
                                                    </div>
                                                    <br></br>
                                                     <button type='submit' className='btn btn-primary'>Modificar Administrador</button>
                                                </p>
                                                <p>
                                                    <br></br>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                </center>
            </form>
        </div>
    )
}

export default Editar_ad
