import React from "react";
import { userCategoryList } from "../service/query/userCategoryList";
import { CategoryCard } from "../components/category-card";

export const CategoryList = () => {
  const [page, setPage] = React.useState(1)
  const { data } = userCategoryList(page);
  const pageSize = Array(
    Number(data?.pageSize) ? Number(  data?.pageSize) : 0
  ).fill(null)

 
  return (
    <div>
      <button className="w-[140px] rounded-lg hover:bg-teal-300 hover:text-black mt-5 h-[55px] bg-teal-600 text-white font-medium">Create Category</button>
      {data?.data?.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
      <div className="flex items-center justify-center">
      {pageSize.map((_,index) => <button onClick={() => setPage(index + 1)} className="w-[50px] h-[50px] mt-10 ml-5 rounded-full hover:bg-gray-400 text-white font-bold shadow-lg shadow-gray-300 bg-gray-500">{index + 1}</button>)}

      </div>
    </div>
  );
};
