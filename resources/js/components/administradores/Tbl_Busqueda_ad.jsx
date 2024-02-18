
import sello from '../../../assets/img/logo_Cs1.png';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Tbl_Busqueda_ad = ({ onResultadoEncontrado }) => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');

    const handleBuscar_1 = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/administrador/${id}`);
            const data= response.data;
            onResultadoEncontrado(data);
            console.log('paso datos admin');
        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
            console.log(' NO paso datos admin');
        }
    };

    const handleBuscarNombre_1 = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/administradorN/${nombre}`);
            const data= response.data;
            onResultadoEncontrado(data);
            console.log('paso datos admin');
            console.log(response.data.get);

        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
            console.log(' NO paso datos admin');
        }
    };

    return (
        <div className="container">
            <center>
            <br></br><br></br>
                <div className="row">
                    <br></br><br></br>

                    <main class="main center col-md-6"  id="1">
                        <div class="container">
                            <div class=" justify-content-center">
                                <div class=" col-xl-10">

                                    <div class="card shadow">
                                        <div class="card-body ">
                                            <div class="row ">
                                                <div class="col-12 text-center">
                                                    <img src={sello}  width="30%" height="100" class="navbar-brand-img  mx-auto" alt="..." />
                                                    <h2 class="mb-0 text-uppercase" style={{ color: 'black' }} >Busqueda del Administrador por el identificador "ID - Administrador"</h2>
                                                </div>
                                                <div class="col-md">
                                                    <p class="small text-muted text-uppercase mb-2">Ingrese la información para la busqueda</p>
                                                    <p class="mb-4">

                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"># ID </span>

                                                            </div>
                                                        <input class="form-control"
                                                            type="text"
                                                            aria-describedby="basic-addon1"
                                                            placeholder="Buscar por ID #######"
                                                            value={id}
                                                            onChange={(e) => setId(e.target.value)}
                                                        />
                                                        </div>
                                                        <br></br>
                                                        <button  className="btn btn-primary" onClick={handleBuscar_1}>Buscar Administrador</button>
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


                    <main class="main center col-md-6" id="1">
                        <div class="container">
                            <div class=" justify-content-center">
                                <div class=" col-xl-10">

                                    <div class="card shadow">
                                        <div class="card-body ">
                                            <div class="row ">
                                                <div class="col-12 text-center mb-10">
                                                    <img src={sello}  width="30%" height="100" class="navbar-brand-img mx-auto" alt="..." />
                                                    <h2 class="mb-0 text-uppercase" style={{ color: 'black' }} >Busqueda del Adminstrador por el Nombre de Usuario </h2>
                                                </div>
                                                <div class="col-md">
                                                    <p class="small text-muted text-uppercase mb-2">Ingrese la información para la busqueda</p>
                                                    <p class="mb-4">

                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Nombre de Usuario </span>

                                                            </div>
                                                        <input class="form-control"
                                                            type="text"
                                                            aria-describedby="basic-addon1"
                                                            placeholder="Buscar por Nombre A-Z a-z"
                                                            value={nombre}
                                                            onChange={(e) => setNombre(e.target.value)}
                                                        />
                                                        </div>
                                                        <br></br>
                                                        <button  className="btn btn-primary" onClick={handleBuscarNombre_1}>Buscar Administrador</button>
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






                </div>
            </center>
        </div>


    );
};
export default Tbl_Busqueda_ad;
