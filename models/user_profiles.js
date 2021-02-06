module.exports = function(sequelize, DataTypes) {
    const User_Profiles = sequelize.define("User_Profiles", {
        locationName: {
            type: DataTypes.STRING
        }
    });
    return User_Profiles;
};