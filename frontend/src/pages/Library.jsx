import React from 'react';
import {Helmet} from "react-helmet";

const Library = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bibliothèque</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      All books
    </div>
  )
}

export default Library;

