import { useQuery } from "@tanstack/react-query";


const useCategory = (item) => {
 const {data: categoryData = [], status} = useQuery({
    queryKey: ['category', item],
    queryFn: async () => {
     const response = await fetch(`http://localhost:5000/showByCategory/${item}`)
    return response.json()
    },
  })
  return [categoryData, status]
};

export default useCategory;