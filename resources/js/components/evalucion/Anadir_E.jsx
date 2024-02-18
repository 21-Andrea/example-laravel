import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import imgEvalucionA from '../../../assets/img/img_evalucion_a.jpg';
import AlertComponent from '../encuestado_R/AlertCompSuccefull'; // Importa el componente de alerta
import AlertCompSuccefull from '../encuestado_R/AlertComponent';


const endpoint = 'http://localhost:8000/api/encuestas'

const Anadir_E = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const navigate = useNavigate()
    const [guardadoExitoso, setGuardadoExitoso] = useState(false);

    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlerta_A, setMostrarAlerta_A] = useState(false);

    const store = async (e) => {
        e.preventDefault()
        try {
        await axios.post(endpoint, {nombre: nombre, descripcion: descripcion})
       // setGuardadoExitoso(true);
        setMostrarAlerta(true);
        setTimeout(() => {
            navigate("/Encuestado/Encuesta");
            window.location.reload();
          }, 2000);


        } catch (error) {
            setMostrarAlerta_A(true);
        window.location.reload();
        throw error;
        }
    }

  return (
    <div>
        {mostrarAlerta && <AlertComponent />}
         {mostrarAlerta_A && <AlertCompSuccefull />}
        <div>
       <center><img src={imgEvalucionA} width="80%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
         </div>
         <br></br>  <br></br>
        <h1 style={{ color: 'black' }}>Crear Nueva Evaluación</h1>
        <h3 style={{ color: '#808080' }}>Ingrese la Información Solicitada para la Evaluación</h3>

        <br></br>
        <br></br>
        {guardadoExitoso && <div className="alert alert-success">Guardado exitoso.</div>}

        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripción</label>
                <input
                    value={descripcion}
                    onChange={ (e)=> setDescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Añade</button>
        </form>
    </div>
  )
}

export default Anadir_E;

