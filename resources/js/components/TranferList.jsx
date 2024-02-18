// import React from 'react';
// import { Router, Route } from 'react-router-dom';
// import Tranfer_F from './components/Tranfer_F';
// import Example_2 from './components/Example_2';
// const app = ({ rootElementId }) => {
//   return (
//     <Router>
//       <Route path="/Tranfer_F" exact  component={ <Tranfer_F/>} >
//         {/* Contenido de tu componente para la página 1 */}
//       </Route>
//       <Route path="/home" exact  component={ <Example_2/>}>
//         {/* Contenido de tu componente para la página 2 */}
//       </Route>
//       {/* Otras rutas y componentes pueden ir aquí */}
//     </Router>
//   );
// };
// export default app;




import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Example_2 from './components/Example_2'; // Importa tus componentes correspondientes
import Tranfer_F from './components/Tranfer_F'; // Importa tus componentes correspondientes

function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/root" exact component={Example_2} />
        <Route path="/root_2" exact component={Tranfer_F} />
      </Routes>
    </BrowserRouter>
  );
}

export default app;
