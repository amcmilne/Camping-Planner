module.exports = function(sequelize, DataTypes) {
  const EquipmentList = sequelize.define("Equipment", {
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

    itemDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  EquipmentList.associate = (models) => {
    EquipmentList.hasMany(models.Equipment, {
      onDelete: "cascade",
    });
  };

  return EquipmentList;
};
