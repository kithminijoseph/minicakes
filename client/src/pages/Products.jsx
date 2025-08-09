import React from 'react'
import { useEffect, useState } from 'react';

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
    <div className="h-screen bg-white">
      <h1 className>Our Cakes</h1>
      <div className="grid grid-cols-4 gap-4">
        {cakes.map(cake => (
          <div key={cake._id} className="card">
            <img src={cake.images[0]} alt={cake.name} />
            <p>{cake.name}</p>
            <p>{cake.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
