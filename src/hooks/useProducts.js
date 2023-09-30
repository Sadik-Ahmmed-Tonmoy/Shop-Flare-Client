import { useQuery } from "@tanstack/react-query";

const useProducts = (item) => {
  const { data: products = [], status} = useQuery({
    
    queryKey: ["products", item],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/category/products/${item}`);
      console.log(status);
      return response.json();
    },
  });
  return [products, status]
};

export default useProducts;
