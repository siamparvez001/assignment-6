// import { useState } from "react";
// import React, { useState } from "react";
// import cardImg from "../assets/Icon (Stroke).png"
// const [cartItems] = useState([]);
// import React from "react";
// const NavBar = () => {
//     return (
//         <div className="navbar max-w-10/12 mx-auto">
//             <div className="navbar-start">
//                 <div className="flex digitools items-center gap-1 font-bold text-xl "> <span className="">DigiTools</span> </div>
//             </div>
//             <div className="navbar-center hidden md:flex">
//                 <ul className="menu menu-horizontal gap-10 px-1 text-lg">
//                     <li><a className="text-black">Products</a></li>
//                     <li><a className="text-black">Features</a></li>
//                     <li><a className="text-black">Pricing</a></li>
//                     <li><a className="text-black">Testimonials</a></li>
//                     <li><a className="text-black">FAQ</a></li>
//                 </ul>
//             </div>
//             <div className="navbar-end gap-5">
//                 <div className="flex gap-2">
//                     <img className="w-[20px] h-[20px]" src={cardImg} alt="" />
                    
//                     <a href="">Login</a>
//                 </div>
//                 <a className="btn bg-red-500 rounded-full text-white">Get Started</a>
//             </div>
//         </div>
//     );
// };

// export default NavBar;


import React from "react";
import cardImg from "../assets/Icon (Stroke).png";

const NavBar = ({ cartItems }) => {
  return (
    <div className="navbar max-w-7xl mx-auto flex justify-between items-center py-4 px-5">

      <div className="navbar-start flex items-center gap-2 font-bold text-xl">
        <span>DigiTools</span>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li><a className="text-black">Products</a></li>
          <li><a className="text-black">Features</a></li>
          <li><a className="text-black">Pricing</a></li>
          <li><a className="text-black">Testimonials</a></li>
          <li><a className="text-black">FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <div className="relative flex items-center gap-2">
          <img className="w-[30px] h-[30px]" src={cardImg} alt="Cart" />
          {cartItems.length > 0 && (
            <div className="absolute -top-3 left-8 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </div>
          )}

          <a href="" className="ml-2">Login</a>
        </div>

        <a className="btn bg-red-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;