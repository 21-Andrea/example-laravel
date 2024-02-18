import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/encuesta'
const endpoint2 = 'http://localhost:8000/api'

const Example_2 = () => {
    const [ encuesta, setEncuesta ] = useState( [] )
    useEffect ( ()=> {
        getAllEncuesta()
    }, [])


  const getAllEncuesta = async () => {
    const response = await axios.get(endpoint)
    setEncuesta(response.data)

    //console.log(response.data)
  }

  const deleteEncuesta = async (id) => {
    await axios.delete(`${endpoint2}/encuestas/${id}`)
    getAllEncuesta()
    window.location.reload();
    setTimeout(() => {
        navigate("/home_T_1");
        window.location.reload();
      }, 2000);

  }

  return (
    <div>
        <div className='d-grid gap-1'>

        <a href="/login"><button class="btn btn-lg btn-primary" >INGRESO A LA ENCUESTA</button></a>

        </div>

        <div className='d-grid gap-2'>

        <a href="/index"><button class="btn btn-lg btn-secondary" >Envio al ingreso</button></a>

        </div>

{/*
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div> */}


        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th  >nombre</th>
                    <th >descripcion</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { encuesta.map( (encuesta) => (
                    <tr key={encuesta.id}>
                        <td > {encuesta.nombre} </td>
                        <td> {encuesta.descripcion} </td>

                        <td>
                            <div id='botones F'>
                             <Link to={`/edit/${encuesta.id}`} className='btn btn-warning  mx-1'>Edit</Link>
                            <button onClick={ ()=>deleteEncuesta(encuesta.id) } className='btn btn-danger  mx-1'>Delete</button>
                            <Link to="/create" className='btn btn-success text-white mx-1'>Create</Link>
                            </div>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default Example_2

// if (document.getElementById('root')) {
//     ReactDOM.render(<Example_2/>, document.getElementById('root'));
// }

