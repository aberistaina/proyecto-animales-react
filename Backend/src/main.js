import express from "express"
import cors from "cors"
import authRoutes  from "./routes/auth.routes.js"
import adminRoutes  from "./routes/admin.routes.js"
import animalesRoutes  from "./routes/animales.routes.js"
import adopcionesRoutes  from "./routes/adopciones.routes.js"
import {errorHandler} from "./middlewares/errors.middlewares.js"
import fileUpload from "express-fileupload";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const app = express()


//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload())
app.use(cors());


//Carpeta Publica
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Endpoints
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/admin", adminRoutes)
app.use("/api/v1/animales", animalesRoutes)
app.use("/api/v1/adopciones", adopcionesRoutes)


//Errors Handler
app.use(errorHandler)


