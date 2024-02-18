    import axios from 'axios'
import React, {useState , useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import AlertComponent from './AlertComponent'; // Importa el componente de alerta
import AlertCompSuccefull from './AlertCompSuccefull'
//import { setExito } from './AlertComponent'; // Importa el componente de alerta
const endpoint_E = 'http://localhost:8000/api/encuestado'

const endpoint = 'http://localhost:8000/api/usuario'

const LoginEncuestado_R = () => {

    const Empresa="ITS Cisneros"
    const [Cargo, setCargo] = useState('')
    const [Celular, setCelular] = useState('')
    const [Correo, setCerreo] = useState('')
    const Ciudad="Riobamba"


    const [cedula, setCedula] = useState('')
    const [nombre, setNombre] = useState('')
    const id_T_U=1
    const navigate = useNavigate()
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlerta_A, setMostrarAlerta_A] = useState(false);

    const store_C = async (e) => {
        e.preventDefault()
        try {
        await axios.post(endpoint, {cedula:cedula, nombre: nombre, id_T_U:id_T_U})
          } catch (error) {
        console.error(error);
         setMostrarAlerta(true);
         window.location.reload();
         navigate('/Encuestado/Login')
         throw error;

          }
    }


    const store = async (e) => {
        e.preventDefault();
        const cedula_U=cedula;
        try {
        await axios.post(endpoint_E, {Empresa: Empresa, Cargo: Cargo, Ciudad: Ciudad, Celular: Celular, Correo: Correo, cedula_U:cedula_U})
    } catch (error) {
        console.error(error);
        setMostrarAlerta(true);
        window.location.reload();
        navigate('/Encuestado/Login')
        throw error;
      }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        await store_C(e);
        await store(e);
        setMostrarAlerta_A(true);
      };

      useEffect(() => {
        if (mostrarAlerta_A) {
          setTimeout(() => {
            navigate("/Encuestado/Encuesta");
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
                    <label  class="mdl-textfield__label" >Cédula</label>
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
                      <label for="nombre">Nombre</label>
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
                    <label for="cargo">Cargo</label>
                    <input
                    type="text"
                    class="form-control"
                    id="Cargo"
                    value={Cargo}
                    onChange={ (e)=> setCargo(e.target.value)}
                    pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?"
                    placeholder="Estudiante - Profesor - Prácticante" />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="celular">Celular</label>
                      <input
                      type="text"
                      class="form-control"
                      id="Celular"
                      value={Celular}
                      onChange={ (e)=> setCelular(e.target.value)}
                      pattern="^\d{10}$"
                      placeholder="099 999 9999" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="correo">Email</label>
                    <input
                    type="email"
                    class="form-control"
                    id="Correo"
                    value={Correo}
                    onChange={ (e)=> setCerreo(e.target.value)}
                    placeholder="brown@asher.com" />
                  </div>
                  <hr class="my-4"></hr>
                  <button type='submit' className='btn btn-primary'>Registrar</button>
        </form>


    </div>

  )
}

export default LoginEncuestado_R;
