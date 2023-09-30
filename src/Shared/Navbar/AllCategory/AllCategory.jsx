import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import samsungLogo from '../../../assets/Logo/Samsung_Logo.svg.webp'
import xiaomiLogo from '../../../assets/Logo/Xiaomi_logo_(2021-).svg.png'

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const AllCategory = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log("click", e);
    navigate(`/${e.key}`);
  };

  return (
    <details className="dropdown z-10 hover:cursor-pointer">
      <summary className="p-4 flex items-center gap-2 font-bold">
        <AiOutlineMenuUnfold />
        <span className="flex items-center gap-24">
          <p className="hover:cursor-pointer">All Brands</p>{" "}
          <MdKeyboardArrowDown />
        </span>
      </summary>

      <div className="mb-10 shadow menu dropdown-content z-[1] p-0">
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          mode="vertical"
          items={[
            // apple
            getItem("Apple", "sub1", <BsApple className="ms-4" size={22}/>, [
              getItem("iPhone", "showProducts/showItems/iPhone"),
              getItem("Mac", "sub2", null, [
                getItem("MacBook Air", "showProducts/showItems/MacBook Air"),
                getItem("MacBook Pro", "showProducts/showItems/MacBook Pro"),
              ]),
              getItem("Apple Watch", "showProducts/showItems/Apple Watch"),
              getItem("AirPods", "sub3", null, [
                getItem("AirPods Pro", "showProducts/showItems/AirPods Pro"),
                getItem("AirPods Max", "showProducts/showItems/AirPods Max"),
              ]),
            ]),
            
            // Samsung
            getItem("Samsung", "sub4", <img className="h-3" src={samsungLogo} alt="" />, [ 
              getItem("Phone", "sub5", null, [
                getItem("Button Phone", "showProducts/showItems/Button Phone"),
                getItem("Smart Phones", "showProducts/showItems/Flagship"),
              ]),
              getItem("Tablets", "sub6", null, [
                getItem("Galaxy Tab S series", "showProducts/showItems/Galaxy Tab S"),
                getItem("Galaxy Tab A series", "showProducts/showItems/Galaxy Tab A"),
              ]),
              getItem("Galaxy Watch", "showProducts/showItems/Galaxy Watch"),
            ]),

            // Xiaomi
            getItem("Xiaomi", "sub7", <img className="h-6 ms-4" src={xiaomiLogo} alt="" />, [
              getItem("Mi Smartphones", "showProducts/showItems/Mi Smartphones"),
              getItem("Mi TV", "showProducts/showItems/Mi TV Series"),
              getItem("Mi Band", "showProducts/showItems/Mi Band")
            ]),
          ]}
        />
      </div>
    </details>
  );
};

export default AllCategory;
