import React, { useState } from 'react';

const Biblioteca = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  }

  const cerrarModal = () => {
    setMostrarModal(false);
  }

  return (
    <div>
      <h1>Biblioteca</h1>
      <button onClick={abrirModal}>Guardar</button>
      {mostrarModal && (
        <div className="modal">
          <h2>Registro completo</h2>
          <p>El recurso ha sido grabado con éxito.</p>
          <button onClick={cerrarModal}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default Biblioteca;
