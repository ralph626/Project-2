const User = require("./User");
const Property = require("./Property");
const Weather = require("./weather");

Property.belongsTo(User,{
  foreignKey: 'user_id'
});

User.hasMany(Property, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Weather.belongsTo(Property, {
  foreignKey:"property_id",
  onDelete:"CASCADE"
});

module.exports = {
  User,
  Property,
  Weather,
};
