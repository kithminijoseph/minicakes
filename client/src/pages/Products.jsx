import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch('https://minicakes-production.up.railway.app/api/cakes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setCakes(data))
      .catch(err => console.error('Failed to load cakes:', err));
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-rose-400 to-orange-300 p-8">
      <div className="grid grid-cols-4 gap-6">
        {cakes.map(cake => (
          <div
            key={cake._id}
            className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition"
          >
            <Link to={`/cake/${cake._id}`}>
              <img
                src={cake.images[0]}
                alt={cake.name}
                className="w-full h-60 object-cover rounded-lg mb-4 cursor-pointer"
              />
            </Link>
            <p className="font-semibold text-lg">{cake.name}</p>
            <p className="text-gray-700">£{cake.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
