const {Horario,User} = require('./db.js')

async function getData(){
    try {
        const users = await User.findAll();
        const horarios = await Horario.findAll();
        return {users,horarios}
     } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error; // Propaga el error hacia arriba si ocurre uno
    }
}

module.exports={getData};