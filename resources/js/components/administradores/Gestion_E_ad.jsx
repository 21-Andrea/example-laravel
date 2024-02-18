import { useNavigate , Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sello from '../../../assets/img/sello-instituto.png';
import UserCreationDate from './UserCreationDate';

const endpoint = 'http://localhost:8000/api/administrador';
const endpoint2 = 'http://localhost:8000/api';

const Gestion_E_ad = () => {
  const history = useNavigate ();

  const [administrador, setAdministrador] = useState([]);
  useEffect(() => {
    getAllAdministrador();
  }, []);

  const getAllAdministrador = async () => {
    const response = await axios.get(endpoint);
    setAdministrador(response.data);
  };

  const deleteAdministrador = async (id) => {
    await axios.delete(`${endpoint2}/administrador/${id}`);
    getAllAdministrador();
    window.location.reload();

    setTimeout(() => {
      history.push("/Administradores/Gestion");
      window.location.reload();
    }, 2000);
  };

  const handleButtonClick = () => {

        navigate("/Administradores/Añadir");
        window.location.reload();
  };

  return (
    <div>
      <center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
      <br></br>
      <h2 className="mb-0 text-uppercase" style={{ color: 'black' }}>Gestión de Administradores</h2>
      <br></br>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-hover table-borderles" id='1'>
            <thead className="thead-dark">
              <tr>
                <th className="collapse show  border">ID</th>
                <th className="collapse show  border">Nombre de Usuario</th>
                <th className="collapse show  border">Contraseña</th>
                <th className="collapse show  border">Número de Cédula</th>
                <th className="collapse show  border">Fecha de creación</th>
                <th className="collapse show  border">Acción</th>
              </tr>
            </thead>
            <tbody>
              {administrador.map((administrador) => (
                <tr className="collapse show  " key={administrador.id}>
                  <td>{administrador.id}</td>
                  <td>{administrador.username}</td>
                  <td>{"*********************"}</td>
                  <td>{administrador.cedula_U}</td>
                  <td><UserCreationDate createdAt={administrador.created_at} /></td>
                  <td>
                    <div id='botones F'>
                      <Link to={`/Administradores/Editar/${administrador.id}`} className='btn bg-light  mx-2'>Editar</Link>
                      <button onClick={() => deleteAdministrador(administrador.id)} className='btn bg-secondary mx-2'>Eliminar</button>
                      <Link to={`/Administradores/Añadir`} onClick={handleButtonClick} className='btn bg-dark text-white mx-1'>Crear</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Gestion_E_ad;
