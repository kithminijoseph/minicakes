import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type CakeSummary = {
  _id: string;
  name: string;
  price: number;
  images: string[];
};

const Products = () => {
  const [cakes, setCakes] = useState<CakeSummary[]>([]);

  useEffect(() => {
    fetch("https://minicakes-production.up.railway.app/api/cakes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json() as Promise<CakeSummary[]>;
      })
      .then(data => setCakes(data))
      .catch(err => console.error("Failed to load cakes:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-rose-200 to-orange-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cakes.map(cake => (
          <div
            key={cake._id}
            className="rounded-lg bg-white p-4 text-center shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Link to={`/cake/${cake._id}`}>
              <img
                src={cake.images[0] ?? ""}
                alt={cake.name}
                className="mb-4 aspect-square w-full cursor-pointer rounded-md object-cover"
              />
            </Link>
            <p className="text-lg font-semibold">{cake.name}</p>
            <p className="text-gray-700">£{cake.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
