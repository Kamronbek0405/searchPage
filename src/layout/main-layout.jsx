import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";
import { Search } from "../components/search";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex">
      <div className="h-screen bg-blue-500 p-[20px] w-[300px]">
        <div>
          <Link className="font-bold text-lg text-white" to={"/"}>Home</Link>
        </div>
        <div>
          <Link className="font-bold text-white text-lg mt-2" to={"/category-list"}>Category list</Link>
        </div>
      </div>
      <div className="w-full flex-grow-1 p-7">
        <Search/>
        <Outlet />
      </div>
    </div>
  );
};
