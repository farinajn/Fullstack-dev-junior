const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");

const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASS;
const dbhost = process.env.DB_HOST;
const dbdialect = process.env.DB_DIALECT;

const db = new Sequelize(dbname, dbuser, dbpass, {
  host: dbhost,
  dialect: dbdialect,
});

const basename = path.basename(__filename); // nombre del archivo actual

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
