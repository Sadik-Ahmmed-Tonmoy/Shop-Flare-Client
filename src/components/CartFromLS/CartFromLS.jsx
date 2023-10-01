import { useEffect, useState } from "react";
import { getCartDataFromLS } from "../../utilities/getCartDataFromLS";
import axios from "axios";
import { Drawer } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromLocalStorage } from "../../utilities/removeFromLocalStorage";
import { addToLocalStorage } from "../../utilities/addToLocalStorage";
import { deductQuantityFromLS } from "../../utilities/deductQuantityFromLS";

const CartFromLS = () => {
  const [products, setProducts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const cartIds = getCartDataFromLS();
      const productDataArray = [];
      for (const id in cartIds) {
        try {
          await axios
            .get(`http://localhost:5000/singleProduct/${id}`)
            .then((response) => {
              // console.log(response.data)

              const quantity = cartIds[id];
              const productData = response.data;
              productData.quantity = quantity;
              productDataArray.push(productData);
            });
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }

      setProducts(productDataArray);
      setIsLoading(false);
    };

    fetchData();
  }, [refetch]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Calculate the total price (sum of subtotals)
  const totalPrice = products.reduce(
    (total, product) => total + product?.price * product?.quantity,
    0
  );
  console.log("totalPrice", totalPrice);

  return (
    <div>
      <div onClick={showDrawer} className="dropdown dropdown-end md:mx-6 z-10">
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
           {products?.length > 0 &&
             <span className="badge badge-sm indicator-item">
             {products?.length}
           </span>
           }
          </div>
        </label>
      </div>
      <Drawer
        title="Shopping Cart"
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
      >
        <div>
          <div className="flex justify-between text-xl text-slate-800">
            <h3>Subtotal</h3>
            <p>${totalPrice}</p>
          </div>
          <button className="w-full border rounded-lg mt-3 btn-outline p-2 hover:bg-orange-400 text-orange-400 bg-blue-500 hover:text-blue-500 font-bold">
            Checkout
          </button>
          <div className="border border-slate-400 h-0 my-4"></div>
        </div>

        {isLoading && <progress className="progress w-56"></progress>}
        {products.map((product) => (
          <>
            <div className="flex border rounded-lg p-2 my-2">
              <div className="w-28">
                <img src={product?.image1} alt="" />
              </div>
              <div className="ms-3 w-full">
                <div className="flex justify-between items-center w-full mb- md:mb-8">
                  <p className="text-lg font-semibold text-slate-700">
                    {product?.name}
                  </p>
                  <RiDeleteBin6Line
                    className="text-slate-700 hover:text-red-800 hover:cursor-pointer"
                    size={20}
                    onClick={() => {
                      removeFromLocalStorage(product._id), setRefetch(!refetch);
                    }}
                  />
                </div>
                <p className="text-slate-800">
                  ${product?.price * product?.quantity}
                </p>
                <div className="btn-group border rounded-lg text-slate-700">
                  <button
                    onClick={() => {
                      deductQuantityFromLS(product?._id), setRefetch(!refetch);
                    }}
                    className="py-1 px-4"
                  >
                    -
                  </button>
                  <button className="">{product?.quantity}</button>
                  <button
                    onClick={() => {
                      addToLocalStorage(product?._id), setRefetch(!refetch);
                    }}
                    className="py-1 px-4"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </Drawer>
    </div>
  );
};

export default CartFromLS;
