import React from 'react';
import './App.css';
import docenteData from './DocenteData';

const App = () => {
  const { foto, nombre, grado, correo, presentacion, cursos } = docenteData;

  return (
    <div className="app-container">
      <div className="docente-container">
        <img src={foto} alt="Foto del docente" className="foto-docente" />
        <h1>{nombre}</h1>
        <h2>{grado}</h2>
        <p>
          <strong>Correo:</strong> {correo}
        </p>
        <p>{presentacion}</p>
        <h3>Cursos relacionados:</h3>
        <ul className="cursos-list">
          {cursos.map((curso, index) => (
            <li key={index}>{curso}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;