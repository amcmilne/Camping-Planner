module.exports = function(sequelize, DataTypes) {
  const User_Profiles = sequelize.define("User_Profiles", {
    locationName: {
      type: DataTypes.STRING,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return User_Profiles;
};
