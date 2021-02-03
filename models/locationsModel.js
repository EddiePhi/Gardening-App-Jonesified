//Locations Model
//This table acts as a joiner table between Plots and Plants & Stores grid location data for Plot.

module.exports = function (sequelize, DataTypes) {
  var Locations = sequelize.define("Locations", {
    //Coordinates increment L to R & Top to Bottom
    //Type integer that creates a location/grid marker for the horizontal coordinate
    x_coordinate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
    //Type integer that creates a location/grid marker for the verticle coordinate
    y_coordinate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
  });

  // We're saying that a location should belong to a Plot
  Locations.associate = function (models) {
    Locations.belongsTo(models.Plots, {
      onDelete: "cascade",
    });
  };
  // each location in a plot also has ONE plant assosciated
  Locations.associate = function (models) {
    Locations.belongsTo(models.Plants);
  };

  return Locations;
};
