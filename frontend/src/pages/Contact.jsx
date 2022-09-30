import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  // Toastify
  const notify = () =>
    toast(
      "Votre message a bien été envoyé. Nous vous répondrons au plus vite."
    );

  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_u2fklzg",
        "template_rl2rmjf",
        formRef.current,
        "kCM4-loc5pRO7-hUK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:flex lg:flex-row md:flex-col sm:flex-col bg-slate-100 overflow-hidden justify-center">
      <div className="flex flex-col font-bold justify-center items-center text-center ">
        <header role="heading" aria-level="1">
          <h1 className="text-xl text-center font-bold m-2 p-2">
            Contact
          </h1>
          <p> Une question ? Une suggestion ?</p>
          <p className="text-yellow-600 mb-6">
            Rendez-vous dans le formulaire ci-dessous.
          </p>
        </header>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid justify-items-center"
        >
          <label className="grid grid-col mb-2 text-sm font-medium">Nom
            <input
              type="text"
              placeholder="Votre nom"
              name="user_name"
              required
              aria-required="true"
              autoComplete="off"
              className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
            />
          </label>
          <label className="grid grid-col mb-2 text-sm font-medium">E-mail
            <input
              type="email"
              placeholder="Votre e-mail"
              name="user_email"
              required
              aria-required="true"
              autoComplete="off"
              className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
            />
          </label>
          <label className="grid grid-col mb-2 text-sm font-medium">Sujet 
            <input
              type="text"
              placeholder="Sujet de votre message"
              name="user_subject"
              required
              aria-required="true"
              autoComplete="off"
              className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
            />
          </label>
          <label className="grid grid-col mb-2 text-sm font-medium">Message
            <textarea
              rows="10"
              placeholder="Votre message"
              name="message"
              required
              aria-required="true"
              autoComplete="off"
              className="m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
            />
          </label>
          <button
            type="submit"
            className="hover:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
            onClick={notify}
          >
            Envoyer !
          </button>
          {done && <ToastContainer />}
        </form>
      </div>
    </div>
  );
}

export default Contact;


