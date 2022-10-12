import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../components/Firebase";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(null);

  const [error, setError] = useState(null);

  const firebase = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .passwordReset(email)
      .then(() => {
        setError(null);
        setSuccess(
          `Votre mot de passe a été envoyé sur votre adresse e-mail : ${email}.`
        );
        setEmail("");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((error) => {
        setError(error);
        setEmail("");
      });
  };

  const disabled = email === "";

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mot de passe oublié</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-slate-100 dark:bg-slate-800">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg",
            height: "700px",
          }}
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          >
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white dark:text-black px-6 md:px-12">
                <h2 class="font-poppins text-xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">
                  Récupération du mot de passe
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid justify-items-center"
                >
                  <label
                    htmlFor="email"
                    className="font-open grid grid-col mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    E-mail
                    <input
                      className="font-open text-gray-900 m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                      type="email"
                      required
                      aria-required="true"
                      autoComplete="off"
                      placeholder="jeanne123@email.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </label>
                  {error && (
                    <span className="text-red-500 font-bold font-poppins m-2">
                      {error.message}
                    </span>
                  )}
                  <button
                    disabled={disabled}
                    type="submit"
                    className="font-open hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
                  >
                    Récupérer mon mot de passe
                  </button>
                  {success && (
                    <span className="text-green-500 font-bold font-poppins m-2">
                      {success}
                    </span>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <Link to="/signup">
          <button
            type="button"
            className="font-open animate-pulse p-3 flex flex-col cursor-pointer  text-black dark:text-white"
          >
            Vous n'avez pas de compte ? Inscrivez-vous.
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ForgetPassword;
