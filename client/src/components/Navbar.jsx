import React from 'react'
import Logo from '../assets/logo.webp';
import axios from 'axios';

function Navbar() {
  const handleOrder = async () => {
    try {
      const response = await axios.post("https://minicakes-production.up.railway.app/api/orders", {
        cake: "Vanilla Cake 1",
        customerName: "Test Customer",
        address: "Fake Address 123",
        dueDate: "2025-08-10"
      });
      console.log('Order placed:', response.data);
      alert("Order placed!");
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order.");
    }
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <img src={Logo} class="rounded-full h-50" alt="Profile"/>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" onClick={handleOrder} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order</button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Order</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>

  );
}

export default Navbar;