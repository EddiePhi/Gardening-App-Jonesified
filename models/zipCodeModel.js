//Zip Code Table Model

module.exports = function (sequelize, DataTypes) {
  var ZipCodes = sequelize.define("ZipCodes", {
    //Zip codes must be a string and must resemble a US zip code (5 chars long)
    zip_codes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [5, 5] },
    },
  });
  return ZipCodes;
};
