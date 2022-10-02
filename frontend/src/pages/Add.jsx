import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
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

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", newBook);
      navigate("/library");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(newBook);

  return (
    <div className="bg-slate-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ajouter un livre</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header role="heading" aria-level="1">
        <h1 className="text-xl text-center font-bold m-2 p-2">
          Ajouter un livre
        </h1>
        <form>
          <label>
            Titre du livre
            <input
              type="text"
              placeholder="ex : Les Misérables"
              name="title"
              onChange={handleChange}
            />
          </label>
          <label>
            Auteur du livre
            <input
              type="text"
              placeholder="ex : Victor Hugo"
              name="author"
              onChange={handleChange}
            />
          </label>
          <label>
            Genre du livre
            <input
              type="text"
              placeholder="ex : Roman"
              name="genre"
              onChange={handleChange}
            />
          </label>
          <label>
            Editeur du livre
            <input
              type="text"
              placeholder="ex : Albin Michel"
              name="publisher"
              onChange={handleChange}
            />
          </label>
          <label>
            Résumé du livre
            <textarea
              type="text"
              placeholder="C'est l'histoire de..."
              name="desc"
              onChange={handleChange}
            />
          </label>
          <label>
            Avis sur le livre (note /5)
            <select name="opinion" onChange={handleChange}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <label>
            Couverture du livre (url)
            <input
              type="text"
              placeholder="ex : https://la-couverture-de-mon-livre.jpg"
              name="cover"
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleClick}>
            Ajouter ce livre
          </button>
        </form>
      </header>
    </div>
  );
};

export default Add;
