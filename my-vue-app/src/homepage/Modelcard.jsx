import React from "react"

import { toast } from "react-toastify";
const ModelCard = ({ model, cartItems, addToCart }) => {
  const isSubscribed = cartItems.find(item => item.id === model.id)

  return (
    <div className="shadow-xl p-4 rounded-2xl space-y-2 hover:-translate-y-2 transition-transform duration-300 ">
      <div className="flex justify-between">
        <img  src={model.image} alt={model.name} className="w-20 h-20 object-cover" />
        <h1>{model.tag}</h1>
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
      {/* <button
        onClick={() => addToCart(model)}
        
        disabled={isSubscribed}
        className="card-Butn btn w-full rounded-2xl my-5">
        {isSubscribed ? "Already Buy" : "Buy Now"}
      </button> */}
      <button
        onClick={() => {
          addToCart(model);
          toast.success("Added to cart!");  
        }}
        disabled={isSubscribed}
        className="card-Butn btn w-full rounded-2xl my-5">
        {isSubscribed ? "Already Buy" : "Buy Now"}
      </button>
    </div>
  )
}

export default ModelCard