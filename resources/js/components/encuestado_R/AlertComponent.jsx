import React, { useState, useEffect } from 'react';

function AlertComponent() {
  const [exito, setExito] = useState(false);

  useEffect(() => {
    if (exito) {
      setTimeout(() => {
        setExito(false); // Restablece exito a false después de 4 segundos
      }, 8000);
    }
  }, [exito]);

  return (
    <div>
      {exito ? (
         <div className="alert alert-danger mt-3">
         ¡Error!
         <br></br>
         Ingrese todos los datos
         <br></br>
         Recuerde solo puede llenar la encuesta una unica vez !!
       </div>
      ) : (
        <div className="alert alert-danger mt-3">
          ¡Error!
          <br></br>
          Ingrese todos los datos
          <br></br>
          Recuerde solo puede llenar la encuesta una unica vez !!
        </div>
      )}
    </div>
  );
}


export default AlertComponent ;
