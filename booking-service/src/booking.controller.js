const express = require('express');
const { createBooking } = require('./booking.service');

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const booking = createBooking(req.body);
  res.json(booking);
});

app.listen(3002, () => console.log('Booking on 3002'));