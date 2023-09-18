require ("dotenv").config;
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();


const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


const { sequelize }= require("./db");

//conexion a la base de datos
sequelize
.authenticate()
.then(()=> console.log("conexion a la base de datos exitosa"))
.catch((error)=> console.log("error al conectar la base de datos", error));



//implementar middleware

// Conf Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Servidor en escucha de peticiones
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));