const { DataTypes, Model } = require("sequelize");

class Post extends Model {}

module.exports = (db) => {
  return Post.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      link: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize: db, timestamps: true, modelName: "post" }
  );
};
