import { useQuery } from "@tanstack/react-query";

const useProducts = (item) => {
  const { data: products = [] } = useQuery({
    queryKey: ["products", item],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/category/products/${item}`);
      return response.json();
    },
  });
  return [products]
};

export default useProducts;
