import { GoChevronDown } from 'react-icons/go';
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const DropDownBtn = ({ title, items }) => {
  return (
    <div>
      <div className="relative group w-min">
        <NavLink to={`/showProducts/showByCategory/${title}`}>
          <span className='flex items-center mt-2 font-semibold'>{title}{items && <GoChevronDown/>}</span>
        </NavLink>

        <div className="py-2 w-1">
          <ul data-aos="fade-up" className="absolute top-8 -left-10 hidden pt-1 border first-letter:space-y-4 bg-white shadow-2xl rounded-md text-black group-hover:block px-4 ">
            {items?.map((item, i) => (
              <Fade key={i} duration="1000">
                {" "}
                <li className="my-2 md:w-28 rounded-md w-full">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : ""
                    }
                    to={`showProducts/showItems/${item}`}
                  >
                    {item}
                  </NavLink>
                </li>{" "}
              </Fade>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownBtn;
