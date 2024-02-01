const {DataTypes} =  require('sequelize');
module.exports=(sequelize)=>{
    sequelize.define('horario',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
        },
        data:{
            type:DataTypes.JSON,           
        },
        
    });
}