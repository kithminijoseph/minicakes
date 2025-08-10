import React from 'react'
import headerbackground from '../assets/aesthetic.jfif';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-rose-200 to-orange-200">
    <img  className="h-screen" src={headerbackground}></img>
    <div className="absolute top-1/4 right-20 text-pink-400 text-4xl font-bold">Welcome to Mini's Cakes ! 🍰</div>
    <div className="absolute top-1/3 w-150 right-20 text-pink-500 text-1xl font-bold">
    Here at Mini's Cakes we specialise in only the finest, handmade cakes. With fresh buttercream and sponges, no added chemicals or preservatives, we deliver only the best. We have a wide range of cakes for every occasion from birthdays to weddings, have a look at our range:</div>
    <Link
      to="/products"
      className="absolute top-2/3 right-20 bg-pink-500 text-white text-xl font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition transform duration-200"

    >
      Products
   </Link>
  </div>
	)
}

export default Home