import React from "react";
import { Helmet } from "react-helmet";

const Favorite = () => {
  // const port = process.env.PORT ?? 5000;

 return (
    
    <div className="bg-slate-100 dark:bg-slate-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Livres favoris</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="font-poppins text-xl text-center text-black dark:text-white font-bold m-2 p-2">
        Mes livres favoris
      </h2>

      <div className="p-2 grid grid-cols-4 gap-4">
        {/* {favs.map((book) => (
          <div
            key={book.id}
            className="m-6 transform transition duration-400 hover:scale-110 text-center w-72 p-2 bg-white rounded-lg border border-gray-200 shadow-md"
          >
            {book.cover && (
              <img
                src={book.cover}
                alt="Couverture du livre"
                className="rounded-lg h-72 w-64"
              />
            )}
            <h2 className="font-poppins font-bold text-yellow-600 p-2 m-2">
              {book.title}
            </h2>
            <h2 className="font-poppins font-bold">{book.author}</h2>
            <h3 className="font-open italic">{book.desc}</h3>
            <h3 className="font-open">{book.genre}</h3>
            <h3 className="font-open">{book.publisher}</h3>
            <h3 className="font-open italic font-bold">{book.opinion}/5</h3>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Favorite;
