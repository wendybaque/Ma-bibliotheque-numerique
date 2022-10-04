import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bibliothèque</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <h2 className="text-xl text-center font-bold m-2 p-2">
          Tous mes livres
        </h2>

      <Link to="/add">
        <button className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6">
          Ajouter un nouveau livre
        </button>
      </Link>

      {books.map((book) => (
        <div className="p-2 flex flex-row justify-center" key={book.id}>
          <div className="m-6 transform transition duration-400 hover:scale-110 text-center w-72 p-2 bg-white rounded-lg border border-gray-200 shadow-md">
            {book.cover && (
              <img
                src={book.cover}
                alt="Couverture du livre"
                className="rounded-lg h-72 w-64"
              />
            )}
            <h2 className="font-mono font-bold text-yellow-600 p-2 m-2">
              {book.title}
            </h2>
            <h2 className="font-mono font-bold">{book.author}</h2>
            <h3 className="italic">{book.desc}</h3>
            <h3>{book.genre}</h3>
            <h3>{book.publisher}</h3>
            <h3 className="italic">{book.opinion}/5</h3>
            <div className="grid-cols-1">
              <Link to={`/update/${book.id}`}>
                <button
                  type="button"
                  className="w-36 cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 mt-4"
                >
                  Modifier
                </button>
              </Link>
              <button
                type="button"
                className="w-36 cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-"
                onClick={() => handleDelete(book.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Library;
