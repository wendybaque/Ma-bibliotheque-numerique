import {db} from "../db.js";

export const getBooks = (req, res) => {
    const query = req.query.cat ? "SELECT * FROM books WHERE cat=?" : "SELECT * FROM books";

    db.query(query, [req.query.cat], (err, data) => {
        if(err) return res.send(err)
        
        return res.status(200).json(data);
    })
}

export const getBook = (req, res) => {
    res.json("from controllers")
}

export const addBook = (req, res) => {
    res.json("from controllers")
}

export const deleteBook = (req, res) => {
    res.json("from controllers")
}

export const updateBook = (req, res) => {
    res.json("from controllers")
}