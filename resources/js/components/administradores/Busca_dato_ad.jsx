// Resultados.js
import React from 'react';
import { hasInjectionContext } from 'vue';

const Busca_dato_ad = ({ datos }) => {

  return (
    <div>
        <br></br><br></br>
        <center>
      <h2  style={{ color: 'Blue' }} >Resultados</h2>
      { datos ? (
        <div  >
          <p><strong style={{ color: 'black' }}>ID:</strong> {datos.id}</p>
          <p><strong style={{ color: 'black' }}>Nombre de Usuario:</strong>{datos.username}</p>
          <p><strong style={{ color: 'black' }}>Contraseña Encriptada:</strong>{datos.password}</p>
          <p><strong style={{ color: 'black' }}>Fecha de Creación del Usuario:</strong> {datos.created_at}</p>
          {/* Agrega más campos según tus datos */}
        </div>
      ) : (
        <p>No se encontraron resultados</p>
      )}
      </center>
    </div>
  );
};

export default Busca_dato_ad;



