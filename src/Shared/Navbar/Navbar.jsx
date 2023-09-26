import { Link, NavLink } from "react-router-dom";
import DropDownBtn from "../../components/DropDownBtn/DropDownBtn";
import ClickDropDown from "../../components/ClickDropDown/ClickDropDown";
import { BsFillPersonFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import navLogo from "../../assets/Logo/navLogo.png";
import { Input } from "antd";
import useCart from "../../hooks/useCart";
import AllCategory from "./AllCategory/AllCategory";
const { Search } = Input;
const onSearch = (value) => console.log(value);

const Navbar = () => {
  const phones = ["Apple", "Samsung", "Xiaomi"];
  const laptop = ["MacBook", "HP", "Lenovo", "Asus"];
  const drones = ["DJI"];
  const accessories = ["Headphones", "Chargers", "Data Cables"];

  const [cart] = useCart();

  return (
    <div className="sticky top-0 z-20">
      {/* mobile */}
      <div className="navbar block md:hidden bg-blue-500">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <ul className=" bg-white w-56 rounded-box z-10">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : ""
                    }
                    to={`/`}
                  >
                    Home
                  </NavLink>
                </li>
                <ClickDropDown title={"Phones"} items={phones} />
                <ClickDropDown title={"Laptop"} items={laptop} />
                <ClickDropDown title={"Drones"} items={drones} />
                <ClickDropDown title={"Accessories"} items={accessories} />
              </ul>
            </ul>
          </div>
          <Link to={"/"}>
            <img src={navLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex">
            <Link to={"/login"}>
              <div className="flex items-center border border-t-orange-400 border-b-red-400 py-1 px-2 rounded-2xl">
                <BsFillPersonFill size={25} />
                <div>
                  <p className="text-sm">Login</p>
                  <p className="text-sm">Account</p>
                </div>
              </div>
            </Link>
            <div className="dropdown dropdown-end mx-1 z-10">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart?.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-black">
                    Quantity: {cart?.length}
                  </span>
                  <span className="font-extrabold text-black">
                    Subtotal: ${"roundedTotal"}
                  </span>
                  <div className="card-actions">
                    <Link to="/dashboard/myCart">
                      <button className="green-btn">View cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen end */}

      {/* pc start*/}
      <div className="hidden md:block">
        <div className="bg-blue-500">
          <div className="flex justify-between items-center w-full container mx-auto py-4">
            <div data-aos="fade-right" data-aos-duration="1000">
              <Link to={"/"}>
                <img className="h-14" src={navLogo} alt="" />
              </Link>
            </div>
            <Search
              data-aos="fade-right"
              data-aos-duration="3000"
              placeholder="input search text"
              enterButton="Search"
              size="large"
              className="bg-gradient-to-b from-orange-400 to-red-400 rounded-3xl mx-10 w-6/12"
              onSearch={onSearch}
            />
            <div data-aos="fade-left" data-aos-duration="2000" className="flex">
              <Link to={"/login"}>
                <div className="flex items-center gap-1 border border-t-orange-400 border-b-red-400 py-1 px-2 rounded-2xl">
                  <BsFillPersonFill size={40} />
                  <div>
                    <p className="text-sm">Login</p>
                    <p className="text-sm">Account</p>
                  </div>
                </div>
              </Link>
              <div className="dropdown dropdown-end mx-6 z-10">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {cart?.length}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg text-black">
                      Quantity: {cart?.length}
                    </span>
                    <span className="font-extrabold text-black">
                      Subtotal: ${"roundedTotal"}
                    </span>
                    <div className="card-actions">
                      <Link to="/dashboard/myCart">
                        <button className="green-btn">View cart</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd col */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center w-full container mx-auto gap-3 bg-white"
        >
          <AllCategory />
          <div className="h-8  border"></div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex gap-8 mt-2 ms-5 z-10"
          >
            <Link to={"/"}>
              <span className="flex items-center mt-2 font-semibold">Home</span>
            </Link>
            <DropDownBtn
              title={"Phones"}
              to={"/dashboard/phones"}
              items={phones}
            />
            <DropDownBtn
              title={"Laptop"}
              to={"/dashboard/laptop"}
              items={laptop}
            />
            <DropDownBtn
              title={"Drones"}
              to={"/dashboard/drones"}
              items={drones}
            />
            <DropDownBtn
              title={"Accessories"}
              to={"/dashboard/accessories"}
              items={accessories}
            />
          </div>
        </div>
      </div>
      {/* pc end*/}
    </div>
  );
};

export default Navbar;
