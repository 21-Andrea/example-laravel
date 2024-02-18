import axios from 'axios'
import React, {useState , useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import AlertComponent from '../encuestado_R/AlertCompSuccefull'; // Importa el componente de alerta
import AlertCompSuccefull from '../encuestado_R/AlertComponent';
const endpoint_E = 'http://localhost:8000/api/administrador'
const endpoint = 'http://localhost:8000/api/usuario'


const Anadir_ad = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


/*  administrador
"username":"andrea",
    "password": "andrea",
    "cedula_U": "0401197298"*/
    const [cedula, setCedula] = useState('')
    const [nombre, setNombre] = useState('')
    const id_T_U=2;
    const navigate = useNavigate()
    const [guardadoExitoso, setGuardadoExitoso] = useState(false);

    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlerta_A, setMostrarAlerta_A] = useState(false);

    const store_C = async (e) => {
        e.preventDefault()
        try {
        await axios.post(endpoint, {cedula:cedula, nombre: nombre, id_T_U:id_T_U})
          } catch (error) {
        console.error(error);
         //setMostrarAlerta(true);
         setMostrarAlerta_A(true);
         window.location.reload();
         navigate('/Administradores/Añadir')
         throw error;

          }
    }




    const store = async (e) => {
        e.preventDefault();
        const cedula_U=cedula;
        try {
        await axios.post(endpoint_E, {username:username, password:password, cedula_U:cedula_U})
    } catch (error) {
        console.error(error);
        //setMostrarAlerta(true);
        setMostrarAlerta_A(true);
        window.location.reload();
        navigate('/Administradores/Añadir')
        throw error;
      }
    }



    const handleFormSubmit = async (e) => {
        e.preventDefault();

        await store_C(e);
        await store(e);
       // setMostrarAlerta_A(true);
       setMostrarAlerta(true);
      };

      useEffect(() => {
        if (mostrarAlerta_A) {
          setTimeout(() => {
            navigate("/home");
            window.location.reload();
          }, 2000); // Redirige después de 2 segundos
        }
      }, [mostrarAlerta_A, navigate]);


  return (

    <div>
         <hr class="my-4"></hr>
         {mostrarAlerta && <AlertComponent />}
         {mostrarAlerta_A && <AlertCompSuccefull />}
        <form onSubmit={handleFormSubmit}>
                  <div class="form-row">
                    <div class="form-group">
                    <label  class="mdl-textfield__label" >Número de Cédula</label>
                    <input
                    value={cedula}
                    onChange={ (e)=> setCedula(e.target.value) }
                    className='form-control'
                    type='text'
                    pattern="-?[0-9]*(\.[0-9]+)|^\d{10}$"
                    id="cedula"
                    placeholder="Ej: 0604420####"
                    />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-7">
                      <label for="nombre">Nombre del Administrador</label>
                      <input
                      type="text"
                      id="nombre"
                      class="form-control"
                      value={nombre}
                      onChange={ (e)=> setNombre(e.target.value)}
                      pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?"
                      placeholder="Nombre" />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="username">Nombre de Usuario</label>
                    <input
                    type="text"
                    class="form-control"
                    id="username"
                    value={username}
                    onChange={ (e)=> setUsername(e.target.value)}
                    pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?"
                    placeholder="Username Ej: 'username_1' " />
                  </div>

                  <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input
                    type="password"
                    class="form-control"
                    id="password"
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    placeholder="Ej: A_dmin_7458_.@" />
                  </div>
                  <hr class="my-4"></hr>
                  <button type='submit' className='btn btn-primary'>Registrar Nuevo Administrador</button>
        </form>


    </div>

  )
}

export default Anadir_ad;
