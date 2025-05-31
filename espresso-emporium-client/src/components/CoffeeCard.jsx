import React from "react";
import { FaEye } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

const CoffeeCard = ({ coffee }) => {
   const { name, photo, chef, price } = coffee;

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

            <div className="space-y-3">
               <div className="text-white bg-[#D2B48C] hover:bg-[#bda17d] p-2 w-fit rounded-[5px] cursor-pointer duration-200">
                  <FaEye />
               </div>

               <div className="text-white bg-[#3C393B] hover:bg-[#5e595c] p-2 w-fit rounded-[5px] cursor-pointer duration-200">
                  <FaPencil />
               </div>

               <div className="text-white bg-[#EA4744] hover:bg-red-600 p-2 w-fit rounded-[5px] cursor-pointer duration-200">
                  <FaTrashCan />
               </div>
            </div>
         </div>
   );
};

export default CoffeeCard;
