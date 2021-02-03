// Creating our Location model
module.exports = function(sequelize, DataTypes) {
    const Equipment = sequelize.define("Equipment", {
  
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
  
      itemName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
  
      itemDescription: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
  
      owned: {
          type: DataTypes.BOOLEAN,
          default: false
      }

    });
    return Equipment;
  };