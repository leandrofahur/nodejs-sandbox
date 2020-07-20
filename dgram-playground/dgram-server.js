const dgram = require('dgram');

const server = {
  address: '0.0.0.0',
  port: 11111
};

const socket = dgram.createSocket('udp4');

socket.on('error', (err) => {
  if(err) {
    console.log(err);
    socket.onClose();
  }
});
  
socket.on('message', (message) => {
  if(message) {
    console.log(message);
  }
});  

socket.bind(server.port, server.address);

