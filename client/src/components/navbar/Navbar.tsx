import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/transparentlogo.svg";
import DecorativeBunting from "./DecorativeBunting";
import NavLinkItem from "./NavLinkItem";
import Basket from "../../assets/basket.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-yellow-100 shadow-md relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Mini's Cakes"
              className="h-30 w-auto sm:h-16 md:h-30"
            />
          </Link>

          <ul className="hidden items-center gap-4 md:flex lg:gap-8">
            <NavLinkItem to="/" label="Home" />
            <NavLinkItem to="/products" label="Products" />
            <NavLinkItem to="/recipes" label="Recipes" />
          </ul>

          <button
            className="hidden text-3xl transition-transform hover:scale-110 md:block md:text-4xl"
            aria-label="Open basket"
          >
            <img src={Basket} alt="Basket" className="h-15 w-auto sm:h-12 md:h-15" />
          </button>

          <button
            className="text-3xl md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="px-4 pb-5 md:hidden">
            <ul className="flex flex-col items-center gap-3">
              <NavLinkItem to="/" label="Home" />
              <NavLinkItem to="/products" label="Products" />
              <NavLinkItem to="/recipes" label="Recipes" />
              <li>
                <button className="text-3xl" aria-label="Open basket">
                  🛒
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <DecorativeBunting />
    </header>
  );
};

export default Navbar;
