import React from 'react';
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Home
    </div>
  )
}

export default Home;