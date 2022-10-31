import React from "react";
import { Link } from "react-router-dom";

const NavbarCat = () => {
  return (
    <nav
      className="flex items-center justify-between flex-wrap bg-yellow-900 dark:bg-slate-800 p-4"
      role="navigation"
    >
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white">
        <div className="text-sm lg:flex-grow content-around">
          <Link
            className="text-base font-normal font-poppins block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            to="/?cat=massecritique"
          >
            <h6>Masse Critique</h6>
          </Link>
          <Link
            className="text-base font-normal font-poppins block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            to="/?cat=coupdecoeur"
          >
            <h6>Coups de coeur</h6>
          </Link>
          <Link
            className="text-base font-normal font-poppins block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            to="/?cat=feelgood"
          >
            <h6>Feel-good</h6>
          </Link>
          <Link
            className="text-base font-normal font-poppins block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            to="/?cat=romance"
          >
            <h6>Romance</h6>
          </Link>
          <Link
            className="p-2 text-base font-normal font-poppins block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            to="/?cat=thriller"
          >
            <h6>Thriller</h6>
          </Link>
          <Link
            className="text-base font-normal font-poppins block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4 transition duration-300"
            to="/?cat=divers"
          >
            <h6>Divers</h6>
          </Link>
          <span className="">
            <Link to="/add" className="">
              Ajouter un livre
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCat;
