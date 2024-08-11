import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div className="">
        <img src={img} alt="img" />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate(`/category-product/${id}`)}
          className="w-[120px] h-[50px] hover:bg-green-300 bg-green-500 rounded-lg text-white font-medium"
        >
          show Product
        </button>
        <button className="w-[120px] h-[50px]  hover:bg-red-300 bg-red-500 rounded-lg text-white font-medium">Delete</button>
        <button className="w-[120px] h-[50px] hover:bg-yellow-300 bg-yellow-500 rounded-lg text-white font-medium">Edit</button>
      </div>
    </div>
  );
};
