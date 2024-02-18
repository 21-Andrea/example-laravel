// App.js
import React, { useState } from 'react';
import sello from '../../../assets/img/sello-instituto.png';
import Genera_informe_R from './Genera_informe_R';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Informes_R = () => {


  return (
    <div>
<center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
      <br></br>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
              <Genera_informe_R />
        </PDFViewer>
    </div>



  );
};

export default Informes_R;
