//Update the Weather Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weather extends Model{}

Weather.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'property',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'weather'
  }

);

module.exports = Weather;
