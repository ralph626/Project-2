const User = require("./User");
const Property = require("./Property");
const Weather = require("./Weather");

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { 
    User, 
    Property,
    Weather,
     };
