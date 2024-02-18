// import React from 'react';
// import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import Example_2 from './components/Example_2'; // Importa tus componentes correspondientes
// import Tranfer_F from './components/Tranfer_F'; // Importa tus componentes correspondientes

// function app() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/root_2" exact component={Example_2} />
//         <Route path="/root" exact component={Tranfer_F} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default app;


import React from 'react';
import '../css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Example_2 from './components/Example_2';
import Tranfer_F from './components/Tranfer_F';

import Encuesta_Encuestado from './components/encuestado_R/Encuesta_Encuestado';


import LoginEncuestado_R from './components/encuestado_R/LoginEncuestado_R';
import  Encuesta_E from './components/encuestado_R/Encuesta_E';
import { PDFDownloadLink } from '@react-pdf/renderer';


import Anadir_E from './components/evalucion/Anadir_E';
import Busqueda_E from './components/evalucion/Busqueda_E';
import Gestion_E from './components/evalucion/Gestion_E';
import Editar from './components/evalucion/Editar';
import Gestion_E_ad from './components/administradores/Gestion_E_ad';
import Busqueda_a from './components/administradores/Busqueda_E_ad';
import Anadir_a from './components/administradores/Anadir_ad';
import Gestion_E_enc from './components/encuestados/Gestion_E_enc';
import Editar_ad from './components/administradores/Editar_ad';
import Informe_ad  from './components/administradores/Informes_ad';
import Informe_R  from './components/encuestado_R/Informes_R';
import Editar_E_enc from './components/encuestados/Editar_E_enc';
import Informe_Esp  from './components/encuestados/Informe_E';
import Informe_Eva  from './components/descargas/Eva_descarga';
import Informe_Eva_resp  from './components/descargas/Resp_evaluaciones';
import Analisis_Com1 from './components/analisis_Enc/Analisis_C_Enc';
import Report_C1 from './components/informes_Categoria/Report_C1';
import Report_C2 from './components/informes_Categoria/Report_C2';
import Report_C3 from './components/informes_Categoria/Report_C3';
import Report_C4 from './components/informes_Categoria/Report_C4';
import Report_C5 from './components/informes_Categoria/Report_C5';
import Report_C6 from './components/informes_Categoria/Report_C6';
import Des_Cate_Infor from './components/informes_Categoria/Des_Cate_Infor';




/*
import Busqueda_E from './components/evalucion/Busqueda_E';
import Gestion_E from './components/evalucion/Gestion_E';*/

function app(rootElementId) {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/home_T_1"  element={ <Example_2/> } />
            <Route path="/home"  element={ <Tranfer_F/> } />



            <Route path="/Encuestado/Encuesta"  element={ <Encuesta_E/> } />
            <Route path="/Encuestado/Login"  element={ <LoginEncuestado_R/> } />


            <Route path="/Evaluacion/Añadir"  element={ <Anadir_E/> } />
            <Route path="/Evaluacion/Busqueda"  element={ <Busqueda_E/> } />
            <Route path="/Evaluacion/Gestion"  element={ <Gestion_E/> } />
            <Route path='/Evaluacion/Editar/:id' element={ <Editar/> } />
            <Route path='Descarga/Evaluaciones' element={ <Informe_Eva/> } />



            <Route path="/Descarga/Respuestas_Evaluaciones"  element={ <Des_Cate_Infor/> } />
            <Route path='/Descarga/Respuestas_Evaluaciones1' element={ <Report_C1/> } />
            <Route path='/Descarga/Respuestas_Evaluaciones2' element={ <Report_C2/> } />
            <Route path='/Descarga/Respuestas_Evaluaciones3' element={ <Report_C3/> } />
            <Route path='/Descarga/Respuestas_Evaluaciones4' element={ <Report_C4/> } />
            <Route path='/Descarga/Respuestas_Evaluaciones5' element={ <Report_C5/> } />
            <Route path='/Descarga/Respuestas_Evaluaciones6' element={ <Report_C6/> } />



            <Route path="/Administradores/Añadir"  element={ <Anadir_a/> } />
            <Route path="/Administradores/Busqueda"  element={ <Busqueda_a/> } />
            <Route path="/Administradores/Gestion"  element={ <Gestion_E_ad/> } />
            <Route path='/Administradores/Editar/:id' element={ <Editar_ad/> } />
            <Route path='/Encuestado/Editar/:id' element={ <Editar_E_enc/> } />
            <Route path='/Administradores/Informe' element={ <Informe_ad/> } />


            <Route path="/Encuestados/Gestion"  element={ <Gestion_E_enc/> } />
            <Route path='/Encuestados/Informe' element={ <Informe_R/> } />
            <Route path='/Encuestados/Informe_Especifico' element={ <Informe_Esp/> } />

            <Route path='/Encuestados/Informe_Especifico' element={ <Informe_Esp/> } />


            <Route path='/Analisis/Grafica' element= {<Analisis_Com1/>} />
             </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default app;


  /*

            <Route path="/Evaluacion/Añadir"  element={ <Anadir_E/> } />
            <Route path="/Evaluacion/Busqueda"  element={ <Evaluacion_B/> } />
            <Route path="/Evaluacion/Gestion"  element={ <Evaluacion_G/> } />
            */
