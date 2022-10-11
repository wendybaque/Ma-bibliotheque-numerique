import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../components/Firebase";

const Signin = () => {
  const navigate = useNavigate();

  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [btn, setBtn] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .signinUser(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        navigate("/library");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error);
      });
  };

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Connexion</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-slate-100 dark:bg-slate-800">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850177_1280.jpg",
            height: "700px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="text-xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">
                  Connexion
                </h2>
                {error !== "" && <span className="text-red-500 font-bold font-mono m-2">{error.message}</span>}
                <form
                  onSubmit={handleSubmit}
                  className="grid justify-items-center"
                >
                  <label
                    htmlFor="email"
                    className="grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    E-mail
                    <input
                      className="text-gray-900 m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="email"
                      required
                      aria-required="true"
                      autoComplete="off"
                      placeholder="jeanne123@email.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </label>
                  <label
                    htmlFor="password"
                    className="grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Mot de passe
                    <input
                      className="text-gray-900 m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="password"
                      required
                      aria-required="true"
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </label>
                  {btn ? (
                    <button
                      type="submit"
                      className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
                    >
                      Se connecter
                    </button>
                  ) : (
                    <button
                      disabled
                      type="submit"
                      className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-200 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
                    >
                      Se connecter
                    </button>
                  )}
                </form>
                <Link to="/forgetpassword">
                  <button
                    type="button"
                    className="p-6 cursor-pointer text-red-400 text-bold"
                  >
                    Mot de passe oublié ?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/signup">
          <button
            type="button"
            className="animate-pulse p-3 flex flex-col cursor-pointer "
          >
            Vous n'avez pas de compte ? Inscrivez-vous.
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Signin;
