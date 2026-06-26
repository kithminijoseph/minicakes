import { Link } from "react-router-dom";
import TapeBackground from "./TapeBackground";

type Props = {
  to: string;
  label: string;
};

const NavLinkItem = ({ to, label }: Props) => {
  return (
    <li className="relative flex w-36 sm:w-40 md:w-44 items-center justify-center">
      <TapeBackground className="absolute inset-0 h-full w-full" />

      <Link
        to={to}
        className="relative z-10 font-kapakana text-3xl font-bold text-pink-600 transition-transform hover:scale-105"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLinkItem;
