const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    continents: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: "Without Capital",
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: "No subregion"
    },
    area: {
      type: DataTypes.DECIMAL,
    },
    population: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};