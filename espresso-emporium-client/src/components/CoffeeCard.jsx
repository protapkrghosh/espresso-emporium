import { FaEye } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
   const { _id, name, photo, chef, price } = coffee;

   const handleDelete = (id) => {
      console.log(id);
   };

   return (
      <div className="card card-side bg-base-200 shadow-sm text-start py-4 flex justify-evenly items-center">
         <figure>
            <img src={photo} alt={name} className="h-40 w-auto rounded-md" />
         </figure>

         <div className="space-y-3">
            <h2 className="card-title">Name: {name}</h2>
            <p>Chef: {chef}</p>
            <p>Price: ${price}</p>
         </div>

         <div>
            <Link to={`/details/${_id}`}>
               <div className="text-white bg-[#D2B48C] hover:bg-[#bda17d] p-2 w-fit rounded-[5px] cursor-pointer duration-200">
                  <FaEye />
               </div>
            </Link>

            <Link to={`update-coffee/${_id}`}>
               <div className="text-white bg-[#3C393B] hover:bg-[#5e595c] p-2 w-fit rounded-[5px] cursor-pointer duration-200 my-3">
                  <FaPencil />
               </div>
            </Link>

            <div
               onClick={() => handleDelete(_id)}
               className="text-white bg-[#EA4744] hover:bg-red-600 p-2 w-fit rounded-[5px] cursor-pointer duration-200"
            >
               <FaTrashCan />
            </div>
         </div>
      </div>
   );
};

export default CoffeeCard;
