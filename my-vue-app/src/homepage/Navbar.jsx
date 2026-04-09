import cardImg from "../assets/Icon (Stroke).png"
const NavBar = () => {
    return (
        <div className="navbar max-w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="flex digitools items-center gap-1 font-bold text-xl "> <span className="">DigiTools</span> </div>
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
            <div className="navbar-end gap-5">
                <div className="flex gap-2">
                    <img src={cardImg} alt="" />
                    <a href="">Login</a>
                </div>
                <a className="btn bg-red-500 rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;