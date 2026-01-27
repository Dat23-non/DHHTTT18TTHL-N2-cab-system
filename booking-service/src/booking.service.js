const amqp = require('amqplib');
const { addBooking } = require('./booking.model');

async function connectRabbit() {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await conn.createChannel();
  await channel.assertQueue('BOOKING_CREATED');
  return channel;
}

const channelPromise = connectRabbit();

async function createBooking(data) {
  const booking = addBooking(data);
  const channel = await channelPromise;
  channel.sendToQueue('BOOKING_CREATED', Buffer.from(JSON.stringify(booking)));
  return booking;
}

module.exports = { createBooking };