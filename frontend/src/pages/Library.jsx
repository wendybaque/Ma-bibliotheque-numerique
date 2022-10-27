import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";

const Library = () => {
  // const port = process.env.PORT ?? 5000;
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bibliothèque</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="font-poppins text-xl text-center font-bold m-2 p-2 text-black dark:text-white">
        Tous mes livres
      </h2>

      <div className="p-2 m-2 grid grid-cols-4 gap-3">
        <h3 className="font-poppins text-yellow-900 dark:text-yellow-600">
          Bienvenue dans ta bibliothèque numérique,
        </h3>
        <Logout />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* {books.map((book) => (
          <div
            key={book.id}
            className="font-open m-6 transform transition duration-400 hover:scale-110 text-center w-72 p-2 bg-white rounded-lg border border-gray-200 shadow-md"
          >
            {book.cover && (
              <img
                src={book.cover}
                alt="Couverture du livre"
                className="rounded-lg h-72 w-64 p-1"
              />
            )}
            <h2 className="font-poppins font-bold text-yellow-600 p-1 m-2">
              {book.title}
            </h2>
            <h2 className="font-poppins font-bold p-1">{book.author}</h2>
            <h3 className="font-open italic p-1">{book.desc}</h3>
            <h3 className="font-open p-1">{book.genre}</h3>
            <h3 className="font-open p-1">{book.publisher}</h3>
            <h3 className="font-open italic p-1">{book.opinion}/5</h3>
            <div className="grid-cols-1">
              <Link to={`/update/${book.id}`}>
                <button
                  type="button"
                  className="font-open w-36 cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 mt-4"
                >
                  Modifier
                </button>
              </Link>
              <button
                type="button"
                className="font-open w-36 cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))} */}
      </div>
      <Link to="/add">
        <button className="font-poppins bottom-1/4 items-center hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6">
          Ajouter un nouveau livre
        </button>
      </Link>
    </div>
  );
};

export default Library;
