import React from 'react';
import './index.css';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Cab Booking MVP</h1>
      <BookingForm />
    </div>
  );
}

export default App;