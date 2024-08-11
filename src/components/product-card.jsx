import React from "react";

export const ProductCard = ({ id, name, img, price, categoryId }) => {
  return (
    <div className="flex items-center justify-between p-6 shadow-md mt-5">
      <div className="">
        <img src={img} alt="img" />
        <h2>{name}</h2>
        <strong>{price}</strong>
      </div>
      <div className="flex items-center gap-5">
        <button className="w-[120px] h-[50px] bg-red-500 rounded-lg text-white font-medium">Delete</button>
        <button className="w-[120px] h-[50px] bg-yellow-500 rounded-lg text-white font-medium">Edit</button>
      </div>
    </div>
  );
};
