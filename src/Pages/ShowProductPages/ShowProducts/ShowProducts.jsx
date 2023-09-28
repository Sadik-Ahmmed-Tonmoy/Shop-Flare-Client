import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";

const ShowProducts = () => {
  const { products } = useParams();
  console.log(products);
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/products/${products}`)
      .then((response) => {
        setItems(response.data);
      });
  }, [products]);
  return (
    <div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {items.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
