import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Library = () => {
  const navigate = useNavigate();

  const { currentUser, logout } = useContext(AuthContext);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/books`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bibliothèque</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="flex flex-row justify-around items-center">
        {currentUser ? (
          <h3 className="p-6 m-6 font-poppins text-yellow-900 dark:text-yellow-600">
            Bienvenue dans ta bibliothèque numérique,{" "}
            <span className="font-bold">{currentUser?.username} </span>!
          </h3>
        ) : (
          <span></span>
        )}
        {currentUser ? (
          <button
            onClick={logout}
            type="button"
            className="font-poppins over:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
          >
            Déconnexion
          </button>
        ) : (
          <span>{navigate("/")}</span>
        )}
      </div>

      {currentUser ? (
        <div className="grid grid-cols-4 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="font-open m-6 transform transition duration-400 hover:scale-110 text-center w-72 p-2 bg-white rounded-lg border border-gray-200 shadow-md"
            >
              {book.img && (
                <img
                  src={book.img}
                  alt="Couverture du livre"
                  className="rounded-lg h-72 w-64 p-1"
                />
              )}
              <Link to={`/book/${book.id}`}>
                <h2 className="font-poppins font-bold text-yellow-600 p-1">
                  {book.title}
                </h2>
              </Link>
              <h2 className="font-poppins font-bold p-1">{book.author}</h2>
              <h3 className="font-open p-1">Genre : {book.cat}</h3>
              <h3 className="font-open p-1">Editeur : {book.publisher}</h3>
              <h3 className="font-open italic p-1">Avis : {book.opinion}/5</h3>
            </div>
          ))}
        </div>
      ) : (
        <span>{navigate("/library")}</span>
      )}
    </div>
  );
};

export default Library;
