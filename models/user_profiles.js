module.exports = function(sequelize, DataTypes) {
    const User_Profiles = sequelize.define("User_Profiles", {
        locationName: {
            type: DataTypes.STRING
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });
    return User_Profiles;
};