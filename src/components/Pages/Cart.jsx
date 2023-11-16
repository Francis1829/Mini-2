import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";
import CartContext from "../Context/CartContext";
import Text from "../img/Text.png";

function Cart() {
  const { items, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  const TotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + TotalPrice(item);
    }, 0);
  };

  return (
    <div>
      <div className="w-full h-full z-10">
        <div className="relative lg:w-[80%] w-auto h-auto my-[2rem] mx-auto bg-light flex flex-col p-4 rounded-md shadow-xl">
          <div className="flex justify-between py-3 m-5 rounded-sm px-4 bg-[#ccc]">
            <div className="font-[Agency] lg:text-[35px] text-2xl flex items-center">
              <img src={Text} alt="" className="mx-4 lg:w-[145px] w-[100px] h-auto"/>
              Cart
            </div>
          </div>
          <div className="flex flex-col justify-start p-4 overflow-y-scroll">
            {items.length === 0 && (
              <span className="p-6 m-auto">Your basket is currently empty</span>
            )}
            {items.map((item, index) => (
              <div
                className="cart-item flex justify-between items-center bg-white p-9 border-2 border-light shadow-sm"
                key={item.position}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[130px] h-[150px]"
                />
                <div className="item-info">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>

                <div className="total-price"></div>
                <div className="flex bg-gray-300 rounded-lg px-3 bg-light">
                  <button onClick={() => incrementQuantity(index)}>
                    <FiPlus />
                  </button>
                  <div className="py-1 px-2 m-2 rounded-md bg-[#ccc]">
                    {item.quantity}
                  </div>
                  <button onClick={() => decrementQuantity(index)}>
                    <FiMinus />
                  </button>
                </div>
                <div className="">
                  <button onClick={() => removeFromCart(index)}>
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              </div>
            ))}
            {items.length > 0 && (
              <div className="flex justify-center m-5">
                <div className="font-semibold text-2xl">
                
                </div>
                <button className="cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none bg-theme-color text-white border border-white shadow-sm text-md px-4 py-1 hidden lg:block m-1 hover:bg-light hover:text-black hover:border-black">
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
