import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from "../components/Logout";

const Library = () => {

  const port = process.env.PORT ?? 5000;

  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : navigate("/");
    });

    // User data recovery via Firestore
    if (userSession) {
      firebase
        .user(userSession.uid)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      listener();
    };
  }, [userSession, firebase, navigate]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:${port}/books`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:${port}/books/${id}`);
      window.location.reload();
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
    <div className="bg-slate-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bibliothèque</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-xl text-center font-bold m-2 p-2">Tous mes livres</h2>

        <div className="p-2 m-2 grid grid-cols-4 gap-3">
          <h3 className="font-mono text-yellow-900">
            Bienvenue dans ta bibliothèque numérique,
            {`${userData.pseudo}`} !
          </h3>
          <Logout />
      </div>
      <div className="p-2 grid grid-cols-4 gap-4">
        {books.map((book) => (
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
            <h2 className="font-mono font-bold text-yellow-600 p-2 m-2">
              {book.title}
            </h2>
            <h2 className="font-mono font-bold">{book.author}</h2>
            <h3 className="italic">{book.desc}</h3>
            <h3>{book.genre}</h3>
            <h3>{book.publisher}</h3>
            <h3 className="italic">{book.opinion}/5</h3>
            <div className="grid-cols-1">
              <Link to={`/update/${book.id}`}>
                <button
                  type="button"
                  className="w-36 cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 mt-4"
                >
                  Modifier
                </button>
              </Link>
              <button
                type="button"
                className="w-36 cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-"
                onClick={() => handleDelete(book.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/add">
          <button className="bottom-1/4 items-center hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6">
            Ajouter un nouveau livre
          </button>
        </Link>
    </div>
  );
};

export default Library;
