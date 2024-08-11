import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductList } from "../service/query/useProductList";
import { ProductCard } from "../components/product-card";

export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useProductList(id);

  return (
    <div>
      <div className="mt-10">
      <Link to={"/create-product"} className=" py-5 px-8 hover:bg-blue-300 mt-5 rounded-lg text-white bg-blue-500">
        Create Product
      </Link>
      </div>
      {data?.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
