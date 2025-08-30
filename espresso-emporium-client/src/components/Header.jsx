import { Link } from "react-router";
import logo from "../assets/more/logo1.png";

const Header = () => {
   return (
      <div className="headerBgImg py-2">
         <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="w-14 mr-3" />
            <Link to={'/'} className="rancho text-4xl text-white">
               Espresso Emporium
            </Link>
         </div>
      </div>
   );
};

export default Header;