import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const Update = () => {
  // const port = process.env.PORT ?? 5000;

  return (
    <div className="lg:flex lg:flex-row md:flex-col sm:flex-col bg-slate-100 dark:bg-slate-800 overflow-hidden justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modifier un livre</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col font-bold justify-center items-center text-center ">
        <h2 className="font-poppins text-xl text-center font-bold m-2 p-2">
          Modifier un livre
        </h2>

        <form>
          <Fade>
            <label className="font-open grid grid-col mb-2 text-sm font-medium">
              Titre du livre
              <input
                type="text"
                placeholder="ex : Les Misérables"
                name="title"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium">
              Auteur du livre
              <input
                type="text"
                placeholder="ex : Victor Hugo"
                name="author"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium">
              Genre du livre
              <input
                type="text"
                placeholder="ex : Roman"
                name="genre"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium">
              Editeur du livre
              <input
                type="text"
                placeholder="ex : Albin Michel"
                name="publisher"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium">
              Résumé du livre
              <textarea
                type="text"
                placeholder="C'est l'histoire de..."
                name="desc"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium">
              Avis sur le livre (note /5)
              <select
                name="opinion"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium">
              Couverture du livre (url)
              <input
                type="text"
                placeholder="ex : https://la-couverture-de-mon-livre.jpg"
                name="cover"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <button
              type="button"
              className="font-poppins hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
            >
              Modifier ce livre
            </button>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default Update;
