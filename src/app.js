const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const { TestConnection } = require("./database/db");

const app = express();

app.use(morgan("dev")); //temrinal logs
app.use(cors({ origin: true, credentials: true }));

app.get("/prueba", async (req, res) => {
  return res.status(200).send("La prueba funciona");
});

//test de conexión
app.listen(3000, async () => {
  await TestConnection();
  console.log("servidor corriendo y escuchando en el puerto 3000");
});
