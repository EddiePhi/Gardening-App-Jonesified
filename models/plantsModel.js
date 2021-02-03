//Plants Table Model

module.exports = function (sequelize, DataTypes) {
  var Plants = sequelize.define("Plants", {
    //Plant name nust be a string between 1 and 30 characters long
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 30] },
    },
    //Plant facts nust be a string between 1 and 150 characters long
    plant_facts: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 150] },
    },
    //Days to a mature plant. Must be an integer between 1 and 365
    days_to_maturity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
      validate: { min: 1, max: 365 },
    },
    //Avg fruit size when ripe. Must be a number, can be a decimal.
    fruit_size_inches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isFloat: true,
    },
    //How much sun does this plant require? Must be a string between 1 and 30 chars.
    sun: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 30] },
    },
    //Measure of area plant uses at maturity. Must be number.
    spread: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
    //Avg height at plant maturity. Must be a number, can be a decimal
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isFloat: true,
    },
  });
  //Plants associated with the locations table. Plants can have many locations within different plots.
  Plants.associate = function (models) {
    Plants.hasMany(models.Locations);
  };

  return Plants;
};
