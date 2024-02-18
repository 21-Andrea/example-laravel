// App.js
import React, { useState } from 'react';
import sello from '../../../assets/img/sello-instituto.png';
import Genera_info_C4 from './Genera_info_C4';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Report_C4 = () => {


  return (
    <div>
        <center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
      <br></br>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
              <Genera_info_C4 />
        </PDFViewer>
    </div>



  );
};
export default Report_C4;
