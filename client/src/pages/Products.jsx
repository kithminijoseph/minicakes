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
    <div>
      <h1>Our Cakes</h1>
      <div className="grid">
        {cakes.map(cake => (
          <div key={cake._id} className="card">
            <img src={cake.images[0]} alt={cake.name} />
            <h2>{cake.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
