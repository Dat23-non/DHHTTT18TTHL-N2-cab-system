const amqp = require('amqplib');

async function initTrip(io) {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await conn.createChannel();
  await channel.assertQueue('DRIVER_ASSIGNED');

  channel.consume('DRIVER_ASSIGNED', (msg) => {
    const data = JSON.parse(msg.content.toString());
    const trip = { ...data, status: 'assigned' };
    io.emit('trip-update', trip); // Emit to clients
    channel.ack(msg);
  });
}

module.exports = { initTrip };