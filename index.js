const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();
const products = require("./routes/administrador.routes");
const User = require("./routes/usuarios.routes");
const Ventas = require("./routes/ventas.routes");

//connecting with DB
require("./config/database");

//Routes
app.use(cors());
app.use("/Administrador", products);
app.use("/Usuarios", User);
app.use("/Ventas", Ventas);

//HTTP request
app.get("/", async (req, res) => {
  res.send("Pagina principal");
});

//Escuchando al servidor
app.listen(port, () => {
  console.log("Estamos conectados");
});
