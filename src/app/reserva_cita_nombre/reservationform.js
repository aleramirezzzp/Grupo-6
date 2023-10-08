import React, { useState } from 'react';

function ReservationForm() {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [career, setCareer] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para buscar y reservar la cita
    // Puedes utilizar los valores de 'name', 'university', 'career' y 'date' para realizar la búsqueda
    console.log('Realizando búsqueda de citas...');
    console.log('Nombre:', name);
    console.log('Universidad:', university);
    console.log('Carrera:', career);
    console.log('Fecha:', date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del docente"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Universidad"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Carrera"
        value={career}
        onChange={(e) => setCareer(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fecha de disponibilidad"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Buscar y Reservar</button>
    </form>
  );
}

export default ReservationForm;