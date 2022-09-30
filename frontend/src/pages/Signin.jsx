import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

const Signin = () => {
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Connexion</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-slate-100 h-full w-full">
      {/* Overlay */}
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={{backgroundPosition: "50%",
            backgroundImage: "url('https://cdn.pixabay.com/photo/2015/12/04/09/13/leaves-1076307__480.jpg",
            height: "500px"}}
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{backgroundColor: "rgba(0, 0, 0, 0.55)"}}
          >
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white px-6 md:px-12">
                <h1 class="text-xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">
                Connexion
                </h1>
                <form className="grid justify-items-center p-2 m-2">
                  <label
                    htmlFor="email"
                    className="grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    E-mail
                    <input
                      className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="email"
                      required
                      aria-required="true"
                      autoComplete="off"
                      placeholder="jeanne123@email.com"

                    />
                  </label>
                  <label
                    htmlFor="password"
                    className="grid grid-col mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Mot de passe
                    <input
                      className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="password"
                      required
                      aria-required="true"
                      autoComplete="off"
                    />
                  </label>
         
                <button
                  type="submit"
                  className="hover:animate-bounce text-white hover:text-white bg-yellow-600 box-shadow-lg focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6 cursor-pointer"
                >
                  Se connecter
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Link to="/inscription">
            <button
              type="button"
              className="animate-pulse p-3 flex flex-col cursor-pointer"
            >
              Vous n'avez pas de compte ? Inscrivez-vous.
            </button>
          </Link>
    </div>
  </section>
  )
}

export default Signin;
