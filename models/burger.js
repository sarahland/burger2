"use strict";

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    
    underscored: true,

  
    freezeTableName: true,

    // define the table's name
    tableName: 'burgers',

    classMethods: {
      associate: function(models) {
        Burgers.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });

  return Burger;
};
