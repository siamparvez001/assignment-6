


import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, cartItems, addToCart }) => {
  const isSubscribed = cartItems.find(item => item.id === model.id);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (cartItems.find(item => item.id === model.id)) {
      toast.warning("The cart is already added");
    } else {
      addToCart(model);
      toast.success("Added to cart!");
      setClicked(true);
    }
  };

  return (
    <div className="shadow-xl p-4 rounded-2xl space-y-2 hover:-translate-y-2 transition-transform duration-300 ">
      <div className="flex justify-between">
        <img src={model.image} alt={model.name} className="w-20 h-20 object-cover" />
        <h1 className="bg-purple-300 w-fit flex items-center rounded-2xl font-bold h-[15px] p-5">{model.tag}</h1>
      </div>
      <h1 className="text-2xl font-bold">{model.name}</h1>
      <div className="flex flex-col">
        {model.features.map((feature, idx) => (
          <p key={idx}>{feature}</p>
        ))}
      </div>
      <p>
        <span className="text-xl font-bold">${model.price}</span>/month
      </p>

      <button
        onClick={handleClick}
        className={`w-full rounded-2xl my-5 py-2 font-bold transition-colors duration-300
        ${cartItems.find(item => item.id === model.id) ? 'bg-green-600 text-black' :  'bg-purple-500 text-white'}
          `}
      >
        {cartItems.find(item => item.id === model.id) ? "Already Buy" : isSubscribed ? "Add to Cart" : "Buy Now"}
      </button>
    </div>
  )
}

export default ModelCard;