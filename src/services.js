const { Horario, User,  } = require('./db.js');

async function getData(){
    try {
        const users = await User.findAll();
        const horarios = await Horario.findAll();
        return {users, horarios}
     } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error; // Propaga el error hacia arriba si ocurre uno
    }
}

async function obtenerDataPorIdHorario(idHorario) {
    try {
        // Buscar el horario por su ID
        const horario = await Horario.findByPk(idHorario);

        // Verificar si se encontró el horario
        if (!horario) {
            throw new Error('Horario no encontrado');
        }

        // Retornar el campo 'data' del horario encontrado
        return horario.data;
    } catch (error) {
        console.error('Error al obtener la data del horario:', error);
        throw error;
    }
}
async function actualizarDataEnHorario(idHorario, newDataArray) {
    try {
   
        
        // Actualizar el campo 'data' del horario
        await Horario.update(
            { data: newDataArray },
            { where: { id: idHorario } }
        );

        console.log('Campo "data" actualizado en el horario correctamente.');
    } catch (error) {
        console.error('Error al actualizar la data en el horario:', error);
        throw error;
    }
}
async function actualizarTurnoDeUsuario(idUsuario, nuevoTurno) {
    try {
        // Actualizar el campo 'turno' del usuario
        await User.update(
            { turno: nuevoTurno },
            { where: { id: idUsuario } }
        );

        console.log('Campo "turno" actualizado en el usuario correctamente.');
    } catch (error) {
        console.error('Error al actualizar el turno del usuario:', error);
        throw error;
    }
}


module.exports = { getData, obtenerDataPorIdHorario,actualizarDataEnHorario ,actualizarTurnoDeUsuario};
