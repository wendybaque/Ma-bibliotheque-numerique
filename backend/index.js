import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "books_schema",
});

// GET ALL BOOKS = READ
app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET ALL BOOKS IN TITLE ALPHABETICAL ORDER = READ
app.get("/books/az", (req, res) => {
  const query = "SELECT * FROM books ORDER BY title ASC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET FAVORITES BOOKS = READ
app.get("/books/fav", (req, res) => {
  const query = "SELECT * FROM books WHERE opinion = 5";
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// BACKEND CONFIG
app.get("/", (req, res) => {
  res.json("Hello, this is the backend.");
});
app.listen(5000, () => {
  console.log("Connected to backend.");
});
