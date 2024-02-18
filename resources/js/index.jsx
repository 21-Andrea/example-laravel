// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app';

// El ID del elemento de montaje se puede pasar como una variable en tu plantilla Blade
// const rootElementId = 'root'; // Puedes cambiar esto según la página actual

// Obtén el elemento de montaje utilizando el ID dinámico
// const rootElement = document.getElementById(rootElementId);

// ReactDOM.render(
//   <React.StrictMode>
//     <App rootElement={rootElement} />
//   </React.StrictMode>,rootElement
// );

import React from 'react';
import ReactDOM from 'react-dom';
import '../css/estilo.css';
import App from './app';
const rootElementId="root";
const rootElement = document.getElementById(rootElementId);
//import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
    <React.StrictMode>
       <App rootElement={rootElement} />
    </React.StrictMode>,rootElement
  );
