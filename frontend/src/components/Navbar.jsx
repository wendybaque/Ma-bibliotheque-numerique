import React from "react";
import logo from "../assets/logo-noir-removebg.png";

export default function NavBar() {
  return (
    <div>
      <nav
        className="flex items-center justify-between flex-wrap bg-yellow-900 p-6"
        role="navigation"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" alt="Back home">
            <img
              src={logo}
              className="fill-current h-24 w-24 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              alt="logo de l'application créé par Wendy Baqué"
            />
          </a>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white">
          <div className="text-sm lg:flex-grow content-around m-2 p-2">
            <a
              href="/library"
              className="p-2 text-base font-normal font-poppins block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            >
              Tous les livres
            </a>
            <a
              href="/add"
              className="p-2 text-base font-normal font-poppins  block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            >
              Ajouter un livre
            </a>
            <a
              href="/favorite"
              alt="redirection vers la page des coups de coeur"
              className="p-2 text-base font-normal font-poppins  block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            >
              Mes coups de ♡
            </a>
            <a
              href="/search"
              alt="redirection vers la page de recherche de livre"
              className="p-2 text-base font-normal font-poppins  block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            >
              Rechercher un livre
            </a>
          </div>
          <div>
            <a
              href="/contact"
              className="animate-pulse text-base font-bold font-poppins inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent lg:mt-0 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
