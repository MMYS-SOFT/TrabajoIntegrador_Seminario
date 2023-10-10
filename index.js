import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const app = express();

//conexiones de carpetas
import { environments } from "./src/conf/environments.js";
import { startDb } from "./src/conf/db.js";

//implementar middleware

// Library middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// Servidor en escucha de peticiones
app.listen(environments.PORT, async () => {
  console.log(`server on port ${environments.PORT}`);
  startDb();
});
