import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Update = () => {

  const port = process.env.PORT ?? 5000;

  const [updateBook, setUpdateBook] = useState({
    title: "",
    desc: "",
    author: "",
    cover: "",
    opinion: null,
    genre: "",
    publisher: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdateBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:${port}/books/${bookId}`, updateBook);
      navigate("/library");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="lg:flex lg:flex-row md:flex-col sm:flex-col bg-slate-100 dark:bg-slate-800 overflow-hidden justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modifier un livre</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col font-bold justify-center items-center text-center ">
        <h2 className="text-xl text-center font-bold m-2 p-2">
          Modifier un livre
        </h2>
        <form>
          <Fade>
            <label className="grid grid-col mb-2 text-sm font-medium">
              Titre du livre
              <input
                type="text"
                placeholder="ex : Les Misérables"
                name="title"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="grid grid-col mb-2 text-sm font-medium">
              Auteur du livre
              <input
                type="text"
                placeholder="ex : Victor Hugo"
                name="author"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="grid grid-col mb-2 text-sm font-medium">
              Genre du livre
              <input
                type="text"
                placeholder="ex : Roman"
                name="genre"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="grid grid-col mb-2 text-sm font-medium">
              Editeur du livre
              <input
                type="text"
                placeholder="ex : Albin Michel"
                name="publisher"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="grid grid-col mb-2 text-sm font-medium">
              Résumé du livre
              <textarea
                type="text"
                placeholder="C'est l'histoire de..."
                name="desc"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="grid grid-col mb-2 text-sm font-medium">
              Avis sur le livre (note /5)
              <select
                name="opinion"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
            <label className="grid grid-col mb-2 text-sm font-medium">
              Couverture du livre (url)
              <input
                type="text"
                placeholder="ex : https://la-couverture-de-mon-livre.jpg"
                name="cover"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <button
              type="button"
              onClick={handleClick}
              className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
            >
              Modifier ce livre
            </button>
          </Fade>
        </form>
        {error && "Something went wrong!"}
      </div>
    </div>
  );
};

export default Update;
