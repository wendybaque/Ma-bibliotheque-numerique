import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Menu = ({cat}) => {

  const [books, setBooks] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/books/?cat=${cat}`);
        setBooks(res.data)
      } catch (err){
        console.log(err)
      }
      fetchData();
    }
  })
  return (
    <div className='m-2 p-2'>
      <h2 className='font-poppins'>Autres livres que vous pourriez aimer...</h2>
    {books.map(book => (
        <div key={book.id} className="flex flex-col m-2 p-2">
            <img src={book.img} alt="Couverture du livre"/>
            <h3>{book.title}</h3>
            <button type="button" className='font-normal'> En savoir plus</button>
        </div>
    ))}
    </div>
  )
}

export default Menu
