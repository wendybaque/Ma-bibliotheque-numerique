import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import Logout from "../components/Logout";

const Add = () => {
  const port = process.env.PORT ?? 5000;

  const [newBook, setNewBook] = useState({
    title: "",
    desc: "",
    author: "",
    cover: "",
    opinion: null,
    publisher: "",
    genre: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Context management
  const [userSession, setUserSession] = useState(null);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : navigate("/");
    });
    return () => {
      listener();
    };
  }, [userSession, firebase, navigate]);

  // Database fetching
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:${port}/books`, newBook);
      navigate("/library");
    } catch (err) {
      console.log(err);
    }
  };

  return userSession === null ? (
    // Loader
    <div role="status" className="bg-slate-100 flex flex-col items-center p-16">
      <svg
        aria-hidden="true"
        className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <div className="lg:flex lg:flex-row md:flex-col sm:flex-col bg-slate-100 dark:bg-slate-800 overflow-hidden justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ajouter un livre</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col font-bold justify-center items-center text-center ">
        <h2 className="font-poppins text-xl text-center text-black dark:text-white font-bold m-2 p-2">
          Ajouter un livre
        </h2>
        <Logout />
        <form className="grid justify-items-center">
          <Fade>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Titre du livre
              <input
                type="text"
                placeholder="ex : Les Misérables"
                name="title"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Auteur du livre
              <input
                type="text"
                placeholder="ex : Victor Hugo"
                name="author"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Genre du livre
              <input
                type="text"
                placeholder="ex : Roman"
                name="genre"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Editeur du livre
              <input
                type="text"
                placeholder="ex : Albin Michel"
                name="publisher"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Résumé du livre
              <textarea
                type="text"
                placeholder="C'est l'histoire de..."
                name="desc"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Avis sur le livre (note /5)
              <select
                name="opinion"
                onChange={handleChange}
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
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Couverture du livre (url)
              <input
                type="text"
                placeholder="ex : https://la-couverture-de-mon-livre.jpg"
                name="cover"
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
              />
            </label>
            <button
              type="button"
              onClick={handleClick}
              className="font-poppins over:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
            >
              Ajouter ce livre
            </button>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default Add;
