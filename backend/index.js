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

// ADD A BOOK = CREATE
app.post("/books", (req, res) => {
  const query =
    "INSERT INTO books(`title`, `desc`, `author`, `cover`, `opinion`, `publisher`, `genre`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.author,
    req.body.cover,
    req.body.opinion,
    req.body.publisher,
    req.body.genre,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json("Ton livre a bien été ajouté");
  });
});

// DELETE A BOOK = DELETE
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM books WHERE id = ?";
  db.query(query, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json("Ton livre a bien été supprimé.");
  });
});

// UPDATE A BOOK = UPDATE
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query =
    "UPDATE books SET `title`= ?, `desc`= ?, `author`= ?, `cover`= ?, `opinion`= ?, `publisher`= ?, `genre`= ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.author,
    req.body.cover,
    req.body.opinion,
    req.body.publisher,
    req.body.genre,
  ];
  db.query(query, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json("Ton livre a bien été modifié.");
  });
});

// BACKEND CONFIG
app.get("/", (req, res) => {
  res.json("Hello, this is the backend.");
});
app.listen(5000, () => {
  console.log("Connected to backend.");
});
