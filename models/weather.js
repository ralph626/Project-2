//Update the Weather Model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("weather", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: (email) => {
        //insert email validation pattern
        const emailPattern = new RegExp(/.+@.+\.(com|net|edu|gov)/);
        return emailPattern.test(email);
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  });
  return User;
};
