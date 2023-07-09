/* eslint-disable react/prop-types */
import { IoLocation } from "react-icons/io5";

export const Card = ({ name, image }) => {
  return (
    <div>
      <div className="relative">
        <div className="w-72 h-48 object-cover rounded-md shadow-sm shadow-white">
          <img src={image} alt={name} className="w-full rounded-md" />
        </div>

        <div className="flex gap-4 absolute z-10 bottom-2 px-3 items-center ">
          <IoLocation />
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};
