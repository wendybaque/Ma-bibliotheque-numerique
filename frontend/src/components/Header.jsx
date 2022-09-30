import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-100">
      {/* Overlay */}
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={{backgroundPosition: "50%",
            backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/07/03/22/books-2599241__480.jpg",
            height: "400px"}}
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{backgroundColor: "rgba(0, 0, 0, 0.55)"}}
          >
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white px-6 md:px-12">
                <h1 class="text-xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">
                Vous aussi, vous lisez beaucoup ? <br />
          Vous souhaitez retrouver rapidement et simplement tous les livres que
          vous avez lus ?
                </h1>
                <button
            type="button"
            className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
          >
            <Link to="/signin">Connexion</Link>
          </button>
          <button
            type="button"
            className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
          >
            <Link to="/signup">Inscription</Link>
          </button>
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="lg:flex lg:flex-row bg-slate-100">
          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center m-2">
            <span className="w-20 border-t-2 border-solid border-yellow-900 rounded-md inline-block mb-3" />
            <h5 className="text-xl font-medium uppercase mb-4">
              Tous vos livres au même endroit
            </h5>
            <p className="text-gray-600">
              Comme dans une vraie bibliothèque, tous les livres que vous avez lus
              sont bien rangés !
            </p>
          </div>

          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center m-2">
            <span className="w-20 border-t-2 border-solid border-yellow-900 rounded-md inline-block mb-3" />
            <h5 className="text-xl font-medium uppercase mb-4">
              Un bon répertoire pour vos avis
            </h5>
            <p className="text-gray-600">
              Vous ne savez plus ce que vous avez pensé d'un livre lu il y a trop
              longtemps ? Ou vous voulez parler d'un livre à un ami ? Ma
              bibliothèque numérique vous permet de retrouver vos avis littéraires
              facilement.
            </p>
          </div>

          <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center m-2">
            <span className="w-20 border-t-2 border-solid border-yellow-900 rounded-md inline-block mb-3" />
            <h5 className="text-xl font-medium uppercase mb-4">
              Un outil partique et accessible partout
            </h5>
            <p className="text-gray-600">
              Pas besoin d'être chez vous pour avoir tous vos livres préférés sous
              la main. Ma bibliothèque numérique s'emporte partout !
            </p>
          </div>

        </div>

    </div>
  );
}