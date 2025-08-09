import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CakeDetails = () => {
  const { id } = useParams();
  const [cake, setCake] = useState(null);

  useEffect(() => {
    fetch(`https://minicakes-production.up.railway.app/api/cakes/${id}`)
      .then(res => res.json())
      .then(data => setCake(data))
      .catch(err => console.error('Error fetching cake:', err));
  }, [id]);

  if (!cake) return <p>Loading...</p>;

  return (
    <div>
      <h1>{cake.name}</h1>
      <img src={cake.images[0]} alt={cake.name} />
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>
    </div>
  );
};

export default CakeDetails;
