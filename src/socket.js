const {Server} = require('socket.io');
const {getData, obtenerDataPorIdHorario,actualizarDataEnHorario,actualizarTurnoDeUsuario} = require('./services.js');
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

      // pongo a escuchar evento "JOIN" donde se le pasa los tados.
      socket.on('join',async ()=>{
        const data = await getData();
        socket.emit('data',data);
      });  

      socket.on('updateData',async ({horario,user})=>{
   
       const dataHorario = await obtenerDataPorIdHorario(horario)
       dataHorario.push(user)
       await actualizarDataEnHorario(horario,dataHorario);
       await actualizarTurnoDeUsuario(user,horario)   
      });




// fin io.on
    });

      return io;
}

module.exports = initialSocket;