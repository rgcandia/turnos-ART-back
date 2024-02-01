const {Server} = require('socket.io');
let io;



// Función para inicializar el SOCKET con el httpServer pasado por parámetro.
function initialSocket(httpServer) {

    io = new Server(httpServer, {
        cors: {
          origin: '*',
        }
      });

      io.on('connection', (socket) => {
        console.log(`Connected: ${socket.id}`);
    
        socket.on('disconnect', () => {
          console.log(`Disconnected: ${socket.id}`);
        });

        
// fin io.on
    });

      return io;
}

module.exports = initialSocket;