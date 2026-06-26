import bunting from "../../assets/bunting.svg";

const DecorativeBunting = () => {
  return (
    <div className="w-full">
      <img
        src={bunting}
        alt=""
        aria-hidden="true"
        className="w-full h-auto block"
      />
    </div>
  );
};

export default DecorativeBunting;
