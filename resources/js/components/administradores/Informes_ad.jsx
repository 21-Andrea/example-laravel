// App.js
import React, { useState } from 'react';
import Busqueda_ad from './Tbl_Busqueda_ad';
import Resultados from './Busca_dato_ad';
import sello from '../../../assets/img/sello-instituto.png';
import Genera_informe_ad from './Genera_informe_ad';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Informes_ad = () => {


  return (
    <div>
   <center><img src={sello} width="70%" height="200" textAling="center" alt="Descripción de la imagen" /></center>
      <br></br>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
              <Genera_informe_ad />
        </PDFViewer>
    </div>



  );
};

export default Informes_ad;
