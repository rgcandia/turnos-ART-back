const server = require('./src/app.js')
const {conn,User,Horario} = require('./src/db.js');
const startModels = require('./src/startModels.js')
require('dotenv').config();
const {PORT} = process.env;
//config init

conn.sync().then(()=>{
   // startModels(conn,User,Horario);    
    console.log('db sincronizada')
    server.listen(PORT,()=>{
        console.log('Servidor Listo en puerto : '+PORT)
        
    });
    
});