import React from 'react'

const Menu = () => {
  return (
    <div className='m-2 p-2'>
      <h2 className='font-poppins'>Autres livres que vous pourriez aimer...</h2>
    {/* {books.map(book => (
        <div key={book.id} className="flex flex-col m-2 p-2">
            <img src={book.img} alt="Couverture du livre"/>
            <h3>{book.title}</h3>
            <button type="button" className='font-normal'> En savoir plus</button>
        </div>
    ))} */}
    </div>
  )
}

export default Menu
