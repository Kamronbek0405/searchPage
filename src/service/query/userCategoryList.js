import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const userCategoryList = (page = 1) => {

  return useQuery({
    queryKey: ["category-list", page],
    queryFn: () => request.get("/category",{ 
      params:{
        _page:page,
      _limit: 1
      }
    }).then((res) => {
      
      return {
        data: res.data,
        pageSize: res.headers.get("X-Total-Count"),
      }
    }),
  });
};
