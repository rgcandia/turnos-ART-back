const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('horario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY, // 👈 NUEVO CAMPO
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
      defaultValue: [], // 👈 MUY IMPORTANTE
    },
  });
};


