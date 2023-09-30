import img from "../../assets/TrendingCategoriesImg/cable.jpg";
import { BsEye } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Tooltip, Rate } from "antd";
import { Link } from "react-router-dom";
import { addToLocalStorage } from "../../utilities/addToLocalStorage";
import Swal from "sweetalert2";

const Card = ({ item }) => {
  const { _id, name, brand, price, sub_details, rating } = item;

  const handleAddToCart = (id) => {
    addToLocalStorage(id)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Item added successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="group">
      <div className="card shadow-xl relative group-hover:shadow-2xl transition-transform">
        <figure>
          <img
            className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className=" absolute top-36 right-4 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-1000 ease-out">
          <div className="flex flex-col bg-white">
            <Link to={`/showDetails/${_id}`}>
              <Tooltip placement="left" title="View Details">
                <BsEye
                  size={40}
                  className="text-blue-400 hover:bg-blue-400 hover:text-white rounded-full p-2 cursor-pointer"
                />
              </Tooltip>
            </Link>
            <Tooltip placement="left" title="Add To Cart">
              <AiOutlineShoppingCart
              onClick={() => handleAddToCart(_id)}
                size={40}
                className="text-black hover:bg-blue-400 hover:text-white rounded-full p-2 cursor-pointer"
              />
            </Tooltip>
          </div>
        </div>
        <div className="card-body p-4 border">
          <h2 className="card-title">
            <span className="text-black font-bold text-2xl md:h-16">
              {name}
            </span>
          </h2>
          <div className="flex items-center">
            <p> Brand: {brand}</p> <Rate allowHalf disabled value={rating} />
          </div>
          <p className="text-slate-500 h-20">{sub_details}</p>
          <div className="card-actions justify-start">
            <h3 className="text-3xl font-semibold text-blue-600">$ {price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
