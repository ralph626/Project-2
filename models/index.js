const User = require("./user");
const Property = require("./property");
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
