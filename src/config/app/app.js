import express from "express";
import Database from "../database/Database.js";
import professorRouter from "../../routes/professorRoutes.js"
import modalidadeRouter from "../../routes/modalidadeRoutes.js";

const app = express();
app.use(express.json(), professorRouter, modalidadeRouter);

const mongodb = await Database.connection();

mongodb.on("error", (err) => {
    console.log(err);
});

mongodb.once("open", () => {
    console.log("Successfully connected on MongoDB <scapi>");
});

app.get("/", (req, res) => {
    res.send("Welcome from scapi!");
});

export default app;
