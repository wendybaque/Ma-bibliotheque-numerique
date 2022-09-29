import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"books_schema",
})

app.get("/", (req, res) => {
    res.json("Hello, this is the backend.")
})

app.listen(5000, () =>{
    console.log("Connected to backend.");
})