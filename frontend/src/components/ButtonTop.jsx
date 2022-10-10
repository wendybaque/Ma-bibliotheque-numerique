import React from 'react'
import down from "../assets/arrow-up-solid.svg";

export default function ButtonTop() {
  return (
    <div className='w-20 h-20 p-2 float-right bg-slate-100'>
      <a href="#" alt="retourner en haut de la page"><button type="button" class="animate-bounce relative w-12 h-12 inline-flex items-center justify-center overflow-y-hidden text-sm font-medium text-gray-900 rounded-lg group">
        <img src={down} alt=" flèche vers le haut" className='w-12 h-12'/>
      </button></a>
    </div>
  )
}