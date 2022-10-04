import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Favorite = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const fetchFavBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books/fav");
        setFavs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFavBooks();
  }, []);
  return (
    <div className="bg-slate-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Livres favoris</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <h2 className="text-xl text-center font-bold m-2 p-2">
          Mes livres favoris
        </h2>

      {favs.map((book) => (
        <div className="p-2 " key={book.id}>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
