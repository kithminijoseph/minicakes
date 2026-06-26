import tape from "../../assets/tape.svg";

type Props = {
  className?: string;
};

const TapeBackground = ({ className = "" }: Props) => {
  return (
    <img
      src={tape}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 select-none object-fill opacity-80 ${className}`}
    />
  );
};

export default TapeBackground;
