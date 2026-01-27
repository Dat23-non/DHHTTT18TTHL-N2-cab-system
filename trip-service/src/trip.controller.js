const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { initTrip } = require('./trip.service');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

require('./websocket')(io);
initTrip(io);

server.listen(3004, () => console.log('Trip on 3004'));