/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('join_announcement', {
    id: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
