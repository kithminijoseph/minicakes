import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cake = () => {
  const { id } = useParams();
  const [cake, setCake] = useState(null);

  useEffect(() => {
    fetch(`https://minicakes-production.up.railway.app/api/cakes/${id}`)
      .then(res => res.json())
      .then(data => setCake(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!cake) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-200 to-orange-200 p-8">
      <div className="max-w-8x1 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white grid grid-cols-2 gap-4">
          {cake.images?.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${cake.name} ${index + 1}`}
              className="w-100 h-80 object-cover"
            />
          ))}
        </div>

        <div className="bg-white w-180 h-100 p-6 rounded-lg shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-pink-600">{cake.name}</h1>
          <p className="text-lg text-gray-700 mb-4">£{cake.price}</p>
          <p className="text-gray-600 mb-6">{cake.description || "No description available."}</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg">
            Add to Basket 🛒
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cake;
