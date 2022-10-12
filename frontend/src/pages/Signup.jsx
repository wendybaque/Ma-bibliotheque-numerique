import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../components/Firebase";

const Signup = () => {
  const navigate = useNavigate();
  // Context access
  const firebase = useContext(FirebaseContext);
  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signupData, setSignupData] = useState(data);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, pseudo } = signupData;
    firebase
      .signupUser(email, password)
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          pseudo,
          email,
        });
      })
      .then(() => {
        setSignupData({ ...data });
        navigate("/library");
      })
      .catch((error) => {
        setError(error);
        setSignupData({ ...data });
      });
  };

  // Destructuring
  const { pseudo, email, password, confirmPassword } = signupData;

  // Display of the submit button
  const displayBtn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <button
        disabled
        type="submit"
        className="hover:animate-bounce cursor-pointer text-grey-300 hover:text-grey-300 bg-yellow-200 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
      >
        S'insrcrire
      </button>
    ) : (
      <button
        type="submit"
        className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
      >
        S'insrcrire
      </button>
    );

  // Management of errors
  const errorMsg = error !== "" && (
    <span className="text-red-500 font-bold font-poppins m-2">
      {error.message}
    </span>
  );

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inscription</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-slate-100 dark:bg-slate-800">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/05/28/07/05/book-1421097_1280.jpg",
            height: "700px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="font-poppins text-xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">
                  Inscription
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid justify-items-center"
                >
                  <label
                    htmlFor="pseudo"
                    className="font-open grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Pseudo
                    <input
                      className="font-open text-gray-900 m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="text"
                      id="pseudo"
                      required
                      aria-required="true"
                      autoComplete="off"
                      placeholder="Dévoreuse_de_livres"
                      onChange={handleChange}
                      value={pseudo}
                    />
                  </label>
                  <label
                    htmlFor="email"
                    className="font-open grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    E-mail
                    <input
                      className="font-open text-gray-900 m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="email"
                      id="email"
                      required
                      aria-required="true"
                      autoComplete="off"
                      placeholder="jeanne123@email.com"
                      onChange={handleChange}
                      value={email}
                    />
                  </label>
                  <label
                    htmlFor="password"
                    className="font-open grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Mot de passe
                    <input
                      className="font-open text-gray-900 m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="password"
                      id="password"
                      required
                      aria-required="true"
                      onChange={handleChange}
                      value={password}
                    />
                  </label>
                  <label
                    htmlFor="confirmPassword"
                    className="font-open grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Confirmer le mot de passe
                    <input
                      className="font-open text-gray-900 m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="password"
                      id="confirmPassword"
                      required
                      aria-required="true"
                      onChange={handleChange}
                      value={confirmPassword}
                    />
                  </label>
                  {errorMsg}
                  {displayBtn}
                </form>
              </div>
            </div>
          </div>
        </div>
        <Link to="/signin">
          <button
            type="button"
            className="font-poppins animate-pulse p-3 flex flex-col cursor-pointer text-black dark:text-white"
          >
            Vous avez déjà un compte ? Connectez-vous.
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Signup;
