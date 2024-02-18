// App.js
import React, { useState } from 'react';
import Busqueda from './Tbl_Busqueda';
import Resultados from './Busca_dato';

const App = () => {
  const [resultados, setResultados] = useState(null);

  const handleResultadoEncontrado = (data) => {
    setResultados(data);
  };

  return (
    <div>
      <center><h1 style={{ color: 'Blue' }}>Buscar y Mostrar Datos</h1></center>
      <Busqueda onResultadoEncontrado={handleResultadoEncontrado} />
      <Resultados datos={resultados} />
    </div>
  );
};

export default App;
