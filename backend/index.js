import express from "express";
import booksRoutes from "./routes/books.js";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

// UPLOADS
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../frontend/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.post("/backend/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });

// BOOKS
app.use("/backend/books", booksRoutes);

// USERS
app.use("/backend/users", usersRoutes);

// AUTH
app.use("/backend/auth", authRoutes);

// // GET ALL BOOKS = READ
// app.get("/books", (req, res) => {
//   const query = "SELECT * FROM books";
//   db.query(query, (err, data) => {
//     if (err) return res.json(err);
//     return res.status(200).json(data);
//   });
// });


// // GET FAVORITES BOOKS = READ
// app.get("/books/fav", (req, res) => {
//   const query = "SELECT * FROM books WHERE opinion = 5";
//   db.query(query, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.json(err);
//     }
//     return res.status(200).json(data);
//   });
// });

// // ADD A BOOK = CREATE
// app.post("/books", (req, res) => {
//   const query =
//     "INSERT INTO books(`title`, `desc`, `author`, `cover`, `opinion`, `publisher`, `genre`) VALUES (?)";
//   const values = [
//     req.body.title,
//     req.body.desc,
//     req.body.author,
//     req.body.cover,
//     req.body.opinion,
//     req.body.publisher,
//     req.body.genre,
//   ];
//   db.query(query, [values], (err, data) => {
//     if (err) return res.send(err);
//     return res.status(200).json("Ton livre a bien été ajouté");
//   });
// });


// // UPDATE A BOOK = UPDATE
// app.put("/books/:id", (req, res) => {
//   const bookId = req.params.id;
//   const query =
//     "UPDATE books SET `title`= ?, `desc`= ?, `author`= ?, `cover`= ?, `opinion`= ?, `publisher`= ?, `genre`= ? WHERE id = ?";
//   const values = [
//     req.body.title,
//     req.body.desc,
//     req.body.author,
//     req.body.cover,
//     req.body.opinion,
//     req.body.publisher,
//     req.body.genre,
//   ];
//   db.query(query, [...values, bookId], (err, data) => {
//     if (err) return res.send(err);
//     return res.status(200).json("Ton livre a bien été modifié.");
//   });
// });

// BACKEND CONFIG

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  console.log("Connected to backend.");
});

app.get("/test", (req, res) => {
  res.json("It works !");
});
