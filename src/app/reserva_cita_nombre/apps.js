import React from 'react';
import ReservationForm from './reservationform';
import ReservationList from './reservationlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sistema de Reserva de Citas</h1>
      <ReservationForm />
      <ReservationList />
    </div>
  );
}

export default App;