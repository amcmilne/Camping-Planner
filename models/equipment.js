// Creating our Equipment model

module.exports = function(sequelize, DataTypes) {
  const Equipment = sequelize.define("Equipment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

/*     itemDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }, */

    owned: {
      type: DataTypes.BOOLEAN,
      default: false,
    },

    need: {
      type: DataTypes.BOOLEAN,
      default: false,
    },

  });
  Equipment.associate = (models) => {
    Equipment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Equipment.belongsTo(models.Location, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Equipment;
};
