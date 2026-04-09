import React, { useState, useEffect } from "react"

import ModelCard from "./Modelcard"


const Models = ({ modelPromise, cartItems, addToCart }) => {
  const [models, setModels] = useState([])

  useEffect(() => {
    modelPromise.then(data => setModels(data))
  }, [modelPromise])

  return (
    <div className="py-10 max-w-10/12 mx-auto">
      {models.length === 0 ? (
        <p className="text-center text-xl">No models available!</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {models.map(model => (
            <ModelCard
              key={model.id}
              model={model}
              cartItems={cartItems}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Models