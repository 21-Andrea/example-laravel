
import React, { useState } from 'react';
import sello from '../../../assets/img/sello-instituto.png';
import sello1 from '../../../assets/img/logo_Cs1.png';// App.
import Genera_informe_Resp from './Genera_informe_Resp';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Resp_evaluaciones = () => {

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

            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <Genera_informe_Resp />
            </PDFViewer>
        </div >
    );
};

export default Resp_evaluaciones;
