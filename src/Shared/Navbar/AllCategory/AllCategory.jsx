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
              getItem("iPhone", "showProducts/iPhone"),
              getItem("Mac", "sub2", null, [
                getItem("MacBook Air", "showProducts/MacBook Air"),
                getItem("MacBook Pro", "showProducts/MacBook Pro"),
                getItem("iMac", "showProducts/iMac"),
              ]),
              getItem("Apple Watch", "showProducts/Apple Watch"),
              getItem("AirPods", "sub3", null, [
                getItem("AirPods Pro", "showProducts/AirPods Pro"),
                getItem("AirPods Max", "showProducts/AirPods Max"),
              ]),
            ]),
            
            // Samsung
            getItem("Samsung", "sub4", <img className="h-3" src={samsungLogo} alt="" />, [ 
              getItem("Phone", "sub5", null, [
                getItem("Button Phone", "showProducts/Samsung Button Phones"),
                getItem("Smart Phones", "showProducts/Samsung Smart Phones"),
              ]),
              getItem("Tablets", "sub6", null, [
                getItem("Galaxy Tab S series", "showProducts/Galaxy Tab S series"),
                getItem("Galaxy Tab A series", "showProducts/Galaxy Tab A series"),
              ]),
              getItem("Laptops", "showProducts/Laptops"),
              getItem("Galaxy Watch", "showProducts/Galaxy Watch"),
            ]),

            // Xiaomi
            getItem("Xiaomi", "sub7", <img className="h-6 ms-4" src={xiaomiLogo} alt="" />, [
              getItem("Mi Smartphones", "showProducts/Mi Smartphones"),
              getItem("Mi TV", "showProducts/Mi TV"),
              getItem("Mi Band", "showProducts/Mi Band")
            ]),
          ]}
        />
      </div>
    </details>
  );
};

export default AllCategory;
