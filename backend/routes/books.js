import express from "express";
import { addBook } from "../controllers/book.js";

const router = express.Router();

router.get("/", addBook);

export default router;