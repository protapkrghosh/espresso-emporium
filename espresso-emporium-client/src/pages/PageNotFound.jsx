import { Link } from "react-router";
import img from "../assets/404/404.gif";
import { FaArrowLeftLong } from "react-icons/fa6";

const PageNotFound = () => {
   return (
      <div className="flex flex-col justify-center">
         <Link
            to={"/"}
            className="rancho text-2xl text-shadow-lg text-shadow-slate-400 text-primary mx-auto flex items-center gap-2 mt-10 px-10"
         >
            <FaArrowLeftLong size={18} /> Back to home
         </Link>

         <div className="mx-auto">
            <img src={img} alt="Image"/>
         </div>
      </div>
   );
};

export default PageNotFound;
