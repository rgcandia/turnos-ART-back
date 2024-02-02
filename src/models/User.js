const {DataTypes} =  require('sequelize');
module.exports=(sequelize)=>{
    sequelize.define('user',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
        },
        turno:{
            type:DataTypes.INTEGER,
        },
        email:{
            type:DataTypes.STRING,

        },
        
    });
}