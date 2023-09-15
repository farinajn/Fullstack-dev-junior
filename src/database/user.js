const { DataTypes, Model } = require("sequelize");

class User extends Model {}

module.exports = (db) => {
  return User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize: db, timestamps: true, modelName: "user" }
  );
};
