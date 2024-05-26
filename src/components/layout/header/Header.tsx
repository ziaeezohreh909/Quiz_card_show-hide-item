import rentcarimage from "../../../assets/rentcar.jpg";
import searchicon from "../../../assets/search.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-600 w-full h-[100px] text-white flex justify-between items-center font-bold p-5">
      <div>
        <ul className="flex flex-wrap gap-3 cursor-pointer">
          <Link to={"/products"}>Products</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/"}>Home</Link>
          <Link to={"/aboutus"}>About Us</Link>
        </ul>
      </div>
      <div className="flex flex-wrap gap-5">
        <span className="bg-white rounded-md flex flex-wrap p-2 gap-3">
          <img src={searchicon} alt="" />
          <input
            type="search"
            placeholder="Search"
            className=" rounded-xl w-60"
          />
        </span>

        <img
          src={rentcarimage}
          alt="rentcar"
          className="w-11 h-11 border rounded-full"
        />
      </div>
    </div>
  );
}
