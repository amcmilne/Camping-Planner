// Creating our Location model
module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    // url not null, unique, is a string
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isUrl: true
        }
    },

    parkname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    latitude: {
        type: DataTypes.DECIMAL,
        precision: 20,
        scale: 8
    },

    longitude: {
        type: DataTypes.DECIMAL,
        precision: 20,
        scale: 8
    },

    state: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
  return Location;
};