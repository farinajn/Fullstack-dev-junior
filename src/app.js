const express = require("express");

const { TestConnection } = require("./database/db");

const app = express();

app.get("/", (req, res) => {
  res.send("Bolaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhh");
});

//test de conexión
TestConnection();
app.listen(3000, () =>
  console.log("servidor corriendo y escuchando en el puerto 3000")
);
