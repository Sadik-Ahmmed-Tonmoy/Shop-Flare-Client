import Card from "../../../components/Card/Card";
import bannerTwsCollection from "../../../assets/TrendingCategoriesImg/twsCollection.png";
import { useEffect, useState } from "react";
import axios from "axios";

const LatestProduct = () => {


  const [items, setItems] = useState([])
  
      useEffect(() => {
          axios.get(`http://localhost:5000/category/products/`)
          .then(response => {
              setItems(response.data);
          })
      }, [])

  return (
    <div className="container mx-auto px-2 py-5">
      <h3 className="my-5 text-2xl">Latest Products</h3>
      <div className='md:grid md:grid-cols-5 gap-6'>
           {
                items.map(item =><Card key={item._id} item={item}/>)
            }
           </div>
      <img className="w-full my-4" src={bannerTwsCollection} alt="" />
    </div>
  );
};

export default LatestProduct;
