import React from 'react';
import {Link} from "react-router-dom";

const BookCard = () => {
  return (
    <section className="bg-slate-100 p- flex justify-center">
      <div className="p-2 lg:flex-wrap lg:flex lg:flex-row md:flex-col sm:flex-col justify-center justify-items-center">
        <div className="m-6 transform transition duration-400 hover:scale-110 flex flex-col justify-center text-center w-72 p-2 bg-white rounded-lg border border-gray-200 shadow-md">
          <img
            className="rounded-lg h-72 w-64 justify-center"
            src="https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865__480.jpg"
            alt="Couverture du livre"
          />
          <h2 className="font-mono font-bold text-yellow-600 p-2 m-2">
            TITRE DU LIVRE
          </h2>
          <h2 className="font-mono font-bold">AUTEUR DU LIVRE</h2>
            <h3 className="italic">RESUME DU LIVRE</h3>
            <h3>GENRE DU LIVRE</h3>
            <h3>EDITEUR DU LIVRE</h3>
            <h3 className="italic">AVIS SUR LE LIVRE</h3>
          <div className="grid-cols-1">
            <Link to="/update">
              <button
                type="button"
                className="w-36 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 mt-4"
              >
                  Modifier
              </button>
            </Link>
              <button
                type="button"
                className="w-36 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-"
              >
                Supprimer
              </button>
          </div>
        </div>
    </div>
  </section>
  )
}

export default BookCard
