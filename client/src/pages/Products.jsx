import { useEffect, useState } from 'react';

const Products = () => {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    fetch('https://minicakes-production.up.railway.app/api/cakes')
      .then(res => res.json())
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
            <p>From £{cake.variants[0].price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
