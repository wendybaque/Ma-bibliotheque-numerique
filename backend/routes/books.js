import express from "express";
import { addBook, deleteBook, getBook, getBooks, getFavBooks, updateBook } from "../controllers/book.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.get("/", getFavBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

export default router;