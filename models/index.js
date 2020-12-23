const User = require("./User");
const Property = require("./Property");

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Property };
