import React from 'react';
import {Helmet} from "react-helmet";

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oups ! Error 404</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Page404
    </div>
  )
}

export default Page404;
