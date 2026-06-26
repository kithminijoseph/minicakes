import { Link } from "react-router-dom";
import headerBackground from "../assets/aesthetic.jpg";
import background from "../assets/background.svg";

function Home() {
  return (
    <main className="relative min-h-[calc(100vh-7rem)] overflow-hidden bg-yellow-200">
      <section className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center px-5 py-16 sm:px-8 lg:px-16">
        <div className="ml-auto w-full max-w-xl  p-5 shadow-lg backdrop-blur-sm sm:p-7 lg:bg-yellow-50">
          <h1 className="text-9xl text-center font-kapakana font-bold text-black sm:text-4xl lg:text-5xl">
            Welcome to Mini's Cakes!
          </h1>
          <p className="mt-5 text-base leading-7 text-black sm:text-md">
            Here at Mini's Cakes we specialise in only the finest, handmade cakes. With fresh buttercream and sponges, no added chemicals or preservatives, we deliver only the best. We have a wide range of cakes for every occasion from birthdays to weddings.
          </p>
          <Link
            to="/products"
            className="font-kapakana mt-8 inline-flex text-center rounded-full bg-pink-200 px-6 py-3 text-3xl font-bold text-pink-500 shadow-lg transition hover:scale-105 hover:bg-pink-600 hover:text-white"
          >
            Products
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
