import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type CakeDetails = {
  _id: string;
  name: string;
  price: number;
  description?: string;
  images?: string[];
};

const Cake = () => {
  const { id } = useParams();
  const [cake, setCake] = useState<CakeDetails | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://minicakes-production.up.railway.app/api/cakes/${id}`)
      .then(res => res.json() as Promise<CakeDetails>)
      .then(data => setCake(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!cake) {
    return <p className="mt-10 text-center">Loading...</p>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-rose-200 to-orange-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3 rounded-lg bg-white p-3 shadow-lg sm:gap-4 sm:p-4">
          {cake.images?.slice(0, 4).map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`${cake.name} ${index + 1}`}
              className="aspect-square w-full rounded-md object-cover"
            />
          ))}
        </div>

        <section className="flex flex-col justify-center rounded-lg bg-white p-6 shadow-lg sm:p-8">
          <h1 className="mb-4 text-3xl font-bold text-pink-600 sm:text-4xl">
            {cake.name}
          </h1>
          <p className="mb-4 text-lg text-gray-700">£{cake.price}</p>
          <p className="mb-6 text-gray-600">
            {cake.description || "No description available."}
          </p>
          <button className="font-kapakana w-full rounded-lg bg-pink-500 px-6 py-3 text-3xl font-semibold text-white hover:bg-pink-600 sm:w-fit">
            Add to Basket
          </button>
        </section>
      </div>
    </main>
  );
};

export default Cake;
