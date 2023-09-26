
import img from "../../assets/TrendingCategoriesImg/cable.jpg";
import { BsEye } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Tooltip } from "antd";


const Card = ({item}) => {
  // const {name, brand, price, sub_details, rating} = item;
  return (
    <div className="group">
      {/* <div className="card shadow-xl relative group-hover:shadow-2xl transition-transform">
        <figure>
          <img
            className="group-hover:scale-110 transition-transform "
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="z-10 absolute top-44 right-4 hidden group-hover:block">
          <div className="flex flex-col gap-2 bg-white">
            <Tooltip placement="left" title="View Details">
              <BsEye
                size={40}
                className="text-black hover:bg-black hover:text-white rounded-full p-2"
              />
            </Tooltip>
            <Tooltip placement="left" title="Add To Cart">
              <AiOutlineShoppingCart
                size={40}
                className="text-black hover:bg-black hover:text-white rounded-full p-2"
              />
            </Tooltip>
          </div>
        </div>
        <div className="card-body border">
          <h2 className="card-title">
        <span className="text-black font-bold text-2xl">{name}</span>
          </h2>
          <span> Brand: {brand}</span>
          <p className="text-slate-500">{sub_details}</p>
          <div className="card-actions justify-start">
            <h3 className="text-3xl font-semibold text-blue-600">$ {price}</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
