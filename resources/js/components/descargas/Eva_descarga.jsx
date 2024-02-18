// App.js
import React, { useState } from 'react';
import sello from '../../../assets/img/sello-instituto.png';
import Genera_informe_Desc from './Genera_informe_Desc';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Eva_descarga = () => {


  return (
    <div>
        <center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
      <br></br>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
              <Genera_informe_Desc />
        </PDFViewer>
    </div>



  );
};

export default Eva_descarga;
