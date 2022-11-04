import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil</title>
        <link rel="canonical" href="https://mabibliothequenumerique.vercel.app/" />
      </Helmet>
      <Header />
    </div>
  );
};

export default Home;
