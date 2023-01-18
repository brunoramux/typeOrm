import express from "express";
import { resolve } from "path";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize() //inicializa o BD antes de inicializar o servidor express
.then(() => {
    // console.log("OK")
    const app = express();

    app.use(express.json())

    app.use(routes)

    app.listen(process.env.PORT) 
})