
import React, { useState } from 'react';
import sello from '../../../assets/img/sello-instituto.png';
import sello1 from '../../../assets/img/logo_Cs1.png';// App.
import Genera_informe_E from './Genera_informe_E';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Informes_R = () => {

    const [id, setId] = useState('');
    const [informeId, setInformeId] = useState(null);

    const handleBuscar = async () => {

        try {

            console.log("sadfad1111111");


        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
        }
    };

    return (
        <div>
            <center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
      <br></br>
            <p class="small text-muted text-uppercase mb-2">Ingrese el numero de cedula</p>

            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"># ID </span>

                </div>
                <input class="form-control"
                    type="text"
                    aria-describedby="basic-addon1"
                    placeholder="Buscar por cedula #######"
                    value={id}
                    onChange={(e) => setId(e.target.value)}

                />
            </div>
            <br></br>
            {
            id.length==10   &&
            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <Genera_informe_E datos={id}/>
            </PDFViewer>
            }
        </div >
    );
};

export default Informes_R;




