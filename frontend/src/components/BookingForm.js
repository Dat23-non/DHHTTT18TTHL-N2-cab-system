import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:3004');

const BookingForm = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [token, setToken] = useState(''); // Thay bằng token thật từ login

  useEffect(() => {
    socket.on('trip-update', (data) => {
      alert(`Trip Update: ${JSON.stringify(data)}`);
    });
    return () => socket.off('trip-update');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/booking', { pickup, dropoff }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Booking created');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Pickup" className="border p-2" />
      <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="Dropoff" className="border p-2" />
      <input type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="JWT Token" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Book</button>
    </form>
  );
};

export default BookingForm;