import React from "react"
import { toast } from "react-toastify";
const Card = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)
  const handlePrice = () => {
    setCartItems([]);
  };
  // const handleDelete = (item) => {
  //   const filterArray = cartItems.filter(c => c.id !== item.id)
  //   setCartItems(filterArray)
  // }
  const handleDelete = (item) => {
  const filterArray = cartItems.filter(c => c.id !== item.id);
  setCartItems(filterArray);
  toast.info(`Cart Remove successful`);  
}
  return (
    <div className="py-10 max-w-7xl mx-auto border m-10 rounded-4xl">
      {cartItems.length === 0 ? (
        <p className="text-center text-3xl">Cart is empty</p>
      ) : (

        <div className="p-10">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          {
            cartItems.map(item =>
              <div className="flex gap-10 m-5 rounded-2xl bg-gray-100 py-5 " key={item.id}>
                <div>
                  <img className="h-2- w-20 object-contain" src={item.image} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="space-y-3">
                    <h1 className="text-xl font-bold ">{item.name}</h1>
                    <p>${item.price}</p>
                  </div>
                  <div className=" flex items-center rounded-2xl ">
                    <button onClick={() => handleDelete(item)} className="ml-auto p-4 text-red-400 cursor-pointer ">Remove</button>
                  </div>

                </div>


              </div>)

          }
          <div className="flex justify-between mx-8">
            <div>Total</div>
            <div className="text-xl font-bold">${totalPrice}</div>
          </div>

          <button onClick={handlePrice} className="proceed p-5 text-white text-center text-xl rounded-2xl mt-5 cursor-pointer w-full">Proceed to Checkout</button>

        </div>
      )
      }
    </div >
  )
}

export default Card