const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");

const basename = path.basename(__filename); // nombre del archivo actual

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    // filtramos todos los archivos que no son .js (algun seed, algun json...)
    // filtramos el archivo desde el cual estamos ejecutando esta funcion
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(db);
  });

const TestConnection = async () => {
  try {
    await db.authenticate();
    await db.sync({ force: true });

    const schemas = await db.getQueryInterface().showAllSchemas();

    console.log("// Tables in database", "==========================");
    console.log(schemas);

    console.log(
      "Te conectaste correctamente a la base de datos. Sos un campeón!"
    );
  } catch (error) {
    console.error(
      "No te pudiste conectar a la base de datos, cosas que pasan....",
      error
    );
  }
};

module.exports = { db, TestConnection };
