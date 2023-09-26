import React from "react";
import img from "../../assets/TrendingCategoriesImg/iphone (1).jpg";

const Card = () => {
  return (
    <div className="border rounded-2xl p-4 hover:shadow-2xl">
      <img src={img} alt="" />
      <p className="text-center mb-4 text-2xl">name</p>
      <p className="text-center my-2">$200</p>
      <div className="w-full flex justify-between"> 
      <button className="btn">View Details</button>
      <button className="btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
