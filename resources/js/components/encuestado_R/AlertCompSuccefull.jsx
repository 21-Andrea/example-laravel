import React, { useState, useEffect } from 'react';

function AlertCompSuccefull() {
  const [exito, setExito] = useState(true);

  useEffect(() => {
    if (exito) {
      setTimeout(() => {
        setExito(true); // Restablece exito a false después de 4 segundos
      }, 4000);
    }
  }, [exito]);

  return (
    <div>
      {exito ? (
        <div className="alert alert-success mt-3">
          ¡El formulario se ha completado con éxito!
        </div>
      ) : (
        <div className="alert alert-danger mt-3">
          ¡Error en el envío!
        </div>
      )}
    </div>
  );
}


export default AlertCompSuccefull ;
