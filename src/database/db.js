const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "proyecto_final_arg_prog_4",
  "root",
  "Numero1756#",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const TestConnection = async () => {
  try {
    await sequelize.authenticate();
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

module.exports = { sequelize, TestConnection };
