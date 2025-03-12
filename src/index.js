const parser = require("body-parser");
const express = require("express");
const app =  express()

const port = 3000;
const animalRoutes= require("./routes/animal");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use("/api", animalRoutes);
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("CONNECTED"))
    .catch((error) => console.log(error));


app.listen(port, () => {
    console.log("SERVIDOR CORRIENDO EN PUERTO 3000");
});