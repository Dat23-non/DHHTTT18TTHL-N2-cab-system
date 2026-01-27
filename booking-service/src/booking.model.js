let bookings = [];
let id = 1;

function addBooking(data) {
  const booking = { id: id++, ...data, status: 'pending' };
  bookings.push(booking);
  return booking;
}

module.exports = { addBooking };