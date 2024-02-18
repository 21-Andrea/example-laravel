// Resultados.js
import React from 'react';

const Busca_dato = ({ datos }) => {
  return (
    <div>
        <br></br><br></br>
        <center>
      <h2  style={{ color: 'Blue' }} >Resultados</h2>
      {datos ? (
        <div  >
          <p><strong style={{ color: 'black' }}>ID:</strong> {datos.id}</p>
          <p><strong style={{ color: 'black' }}>Nombre:</strong> {datos.nombre}</p>
          <p><strong style={{ color: 'black' }}>Descripcion:</strong> {datos.descripcion}</p>
          {/* Agrega más campos según tus datos */}
        </div>
      ) : (
        <p>No se encontraron resultados</p>
      )}
      </center>
    </div>
  );
};

export default Busca_dato;
