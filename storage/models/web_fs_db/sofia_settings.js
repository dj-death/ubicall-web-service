/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("sofia_settings", { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    sofia_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    param_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    param_value: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
