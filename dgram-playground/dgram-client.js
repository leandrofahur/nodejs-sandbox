const dgram = require('dgram');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = {
  address: '192.168.10.1',
  port: 8889
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
    console.log(`\nMessage: ${message}`);
  }
});  

(function userInput() {
  readline.question('Enter command:  ', (command) => {
    if (command === 'close') {
      console.log('Closing aplication...');
      socket.close();
      readline.close();
    } else {
      socket.send(command, client.port, client.address, (err, bytes) => {
        if(err) {
          console.log(err.message);
          socket.close();
        }
      });
      userInput();
    }
  });
}());

// socket.send('commnad', client.port, client.address, (err, bytes) => {
//   if(err) {
//     console.log(err.message);
//     socket.close();
//   }
// });

// socket.send('streamon', client.port, client.address, (err, bytes) => {
//   if(err) {
//     console.log(err.message);
//     socket.close();
//   }
// });


