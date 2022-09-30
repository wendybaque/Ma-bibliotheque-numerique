import React from 'react';
import {Helmet} from "react-helmet";
import BookCard from '../components/BookCard';

const Library = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bibliothèque</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <BookCard/>
    </div>
  )
}

export default Library;

