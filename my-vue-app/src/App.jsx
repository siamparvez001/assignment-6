import NavBar from "./homepage/Navbar"
import Banner from "./homepage/Banner"
import Rating from "./homepage/Rating"
import Models from "./homepage/Model"
import Footer from "./homepage/Footer"
import Transfrom from "./homepage/Transfrom"
import Simple from "./homepage/Simple"
import Steps from "./homepage/Steps"
import Card from "./homepage/Card"
import Primium from "./homepage/Primium"
// import ModelCard from "./homepage/Modelcard"
import { useState } from "react"
const getModels = async () => {
  const res = await fetch("/model.json")
  return res.json()
}
const modelPromise = getModels()
function App() {
  const [activeTab, setActiveTab] = useState("model")
  const [cartItems, setCartItems] = useState([])
  // console.log(activeTab)
  const addToCart = (model) => {
    setCartItems((prev) => {
      if (!prev.find(item => item.id === model.id)) {
        return [...prev, model]
      }
      return prev
    })
  }
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Rating></Rating>
      <Primium></Primium>
      <div>
        <div className="tabs tabs-box w-fit mx-auto bg-transparent justify-center">
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Model" checked={activeTab === "model"}
            onChange={() => setActiveTab("model")} defaultChecked />
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label={`Cart (${cartItems.length})`} checked={activeTab === "cart"

          }
            onChange={() => setActiveTab("card")}
            onClick={() => setActiveTab("card")} />


        </div>
        
      </div>
      {activeTab === "model" && <Models modelPromise={modelPromise} cartItems={cartItems} addToCart={addToCart}></Models>}
      {activeTab === "card" && <Card cartItems={cartItems} setCartItems={setCartItems}></Card>}
      <Steps></Steps>
      <Simple></Simple>
      <Transfrom></Transfrom>
      <Footer></Footer>
    </>
  )
}

export default App
