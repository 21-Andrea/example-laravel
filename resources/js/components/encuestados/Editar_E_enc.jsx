
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sello from '../../../assets/img/logo_Cs1.png';

const endpoint = 'http://localhost:8000/api/encuestado/'

const endpoint_2 = 'http://localhost:8000/api/usuario/'

const Editar_E_enc = () => {

    const [Empresa, setEmpresa] = useState('')
    const [Ciudad, setCiudad] = useState('')
    const [Celular, setCelular] = useState('')
    const [Correo, setCorreo] = useState('')
    const [nombre, setNombre] = useState('')
    const [cedula_U, setCedula] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            Empresa: Empresa,
            Ciudad: Ciudad,
            Celular: Celular,
            cedula_U: cedula_U,
            Correo: Correo
        })
        navigate('/Encuestados/Gestion')

    }

    const [inputHabilitado, setInputHabilitado] = useState(true);

    const handleToggleInput = () => {
        setInputHabilitado(!inputHabilitado);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${endpoint}${id}`);
            setEmpresa(response.data.Empresa);
            setCiudad(response.data.Ciudad);
            setCelular(response.data.Celular);
            setCorreo(response.data.Correo);
            setCedula(response.data.cedula_U);
            const cedulaValue = response.data.cedula_U;
            setCedula(cedulaValue);
            console.log("Valor de cedula_U:", cedulaValue); // Mover la llamada a console.log aquí


            try {
                const otraApiResponse = await axios.get(`${endpoint_2}${cedulaValue}`);
                const nombreValue = otraApiResponse.data.nombre;
                setNombre(nombreValue);
                console.log("Valor de nombre:", nombreValue)
            } catch (error) {
                console.error("Error al obtener el nombre del usuario:", error);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div>

            <h1 class="mb-0 text-uppercase" style={{ color: 'black' }} >Editar Datos del Encuestado  </h1>
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
                                                    <h2 class="mb-0 text-uppercase" style={{ color: 'black' }} >Datos del Encuestado a Modificar </h2>
                                                </div>
                                                <div class="col-md">
                                                    <br></br>
                                                    <p class="small text-muted text-uppercase mb-2">Ingrese la información requerida para la modificación</p>
                                                    <p class="mb-4">
                                                        <br></br>

                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Ingrese del encuestado</span>

                                                            </div>
                                                            <input
                                                                value={nombre}
                                                                disabled={inputHabilitado}
                                                                onChange={(e) => setNombre(e.target.value)}
                                                                type='text'
                                                                className='form-control'
                                                            />
                                                        </div>
                                                        <br></br>

                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Ingrese la Empresa </span>

                                                            </div>
                                                            <input
                                                                value={Empresa}
                                                                onChange={(e) => setEmpresa(e.target.value)}
                                                                type='text'
                                                                className='form-control'
                                                            />
                                                        </div>
                                                        <br></br>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Ingrese la Ciudad </span>

                                                            </div>
                                                            <input
                                                                value={Ciudad}
                                                                onChange={(e) => setCiudad(e.target.value)}
                                                                type='text'
                                                                className='form-control'
                                                            />
                                                        </div>
                                                        <br></br>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Ingrese el Celular </span>

                                                            </div>
                                                            <input
                                                                value={Celular}
                                                                onChange={(e) => setCelular(e.target.value)}
                                                                type='text'
                                                                className='form-control'
                                                            />
                                                        </div>
                                                        <br></br>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Ingrese el Correo </span>

                                                            </div>
                                                            <input
                                                                value={Correo}
                                                                onChange={(e) => setCorreo(e.target.value)}
                                                                type='text'
                                                                className='form-control'
                                                            />
                                                        </div>
                                                        <br></br>
                                                        <button type='submit' className='btn btn-primary'>Modificar Encuestado</button>
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

export default Editar_E_enc
