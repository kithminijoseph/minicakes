import React from "react";
import bunting from "../../assets/bunting.svg";

const DecorativeBunting = () => {
  return (
    <div className="w-full bg-yellow-200 overflow-hidden">
      <img
        src={bunting}
        alt="bunting decoration"
        className="block w-full object-cover"
      />
    </div>
  );
};

export default DecorativeBunting;