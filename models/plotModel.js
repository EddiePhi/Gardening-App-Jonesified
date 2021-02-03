//Plots Model

module.exports = function (sequelize, DataTypes) {
  var Plots = sequelize.define("Plots", {
    //plot name as string must be 1 chars long & no more than 30 chars
    plot_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 30] },
    },
    //plot rows type integer must be type number between 1 and 5
    plot_rows: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
    //plot columns type integer must be type number between 1 and 5
    plot_columns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
  });
  //associate Plots table with Locations table. Plots store many locations in locations tableS
  Plots.associate = function (models) {
    Plots.hasMany(models.Locations);
  };

  return Plots;
};
