const amqp = require('amqplib');

async function initMatching() {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await conn.createChannel();
  await channel.assertQueue('BOOKING_CREATED');
  await channel.assertQueue('DRIVER_ASSIGNED');

  channel.consume('BOOKING_CREATED', (msg) => {
    const booking = JSON.parse(msg.content.toString());
    // Rule-based: Chọn driver available đầu tiên
    const drivers = [{ id: 2, available: true }]; // In-memory
    const driver = drivers[0];
    if (driver) {
      channel.sendToQueue('DRIVER_ASSIGNED', Buffer.from(JSON.stringify({ bookingId: booking.id, driverId: driver.id })));
    }
    channel.ack(msg);
  });
}

module.exports = { initMatching };