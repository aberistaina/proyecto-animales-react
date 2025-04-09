import express from "express"
import cors from "cors"
import authRoutes  from "./routes/auth.routes.js"
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
app.use("/public", express.static(__dirname + "/public"));

//Endpoints
app.use("/api/v1/auth", authRoutes)


//Errors Handler
app.use(errorHandler)


