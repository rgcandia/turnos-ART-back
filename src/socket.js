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

      if(dataHorario.length<4){
        dataHorario.push(user)
        await actualizarDataEnHorario(horario,dataHorario);
        await actualizarTurnoDeUsuario(user,horario)  
        // se envía la data actualizada a todos los conectados
        const data = await getData();
        io.emit('data',data);
      }else{
        socket.emit('alert',{error:'Lo sentimos, los turnos para el horario seleccionado están ocupados'})
      }


      });

      // Esucho el evento eliminar reserva
    socket.on('eliminarReserva',async ({userId,horarioId})=>{
       // coloco en null el campo turno en el usuario
        await actualizarTurnoDeUsuario(userId,null)  
        //elimino el usuario en el array data del horario especificado
        const dataHorario = await obtenerDataPorIdHorario(horarioId)
        const newData = dataHorario.filter(e=>e !== userId)
        await actualizarDataEnHorario(horarioId,newData);
        //actualizo enviando a todos los conectado 
        const data = await getData();
        io.emit('data',data);

    })



// fin io.on
    });

      return io;
}

module.exports = initialSocket;