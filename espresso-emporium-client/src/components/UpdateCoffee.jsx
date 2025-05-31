import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";
import { data, Link, useLoaderData, useParams } from "react-router";

const UpdateCoffee = () => {
   const { id } = useParams();
   const loadedCoffee = useLoaderData();
   const coffee = loadedCoffee.find((cof) => cof._id === id);

   const handleUpdateCoffee = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const updateCoffee = Object.fromEntries(formData.entries());

      fetch(`${import.meta.env.VITE_URL}/coffees/${id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(updateCoffee),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount) {
               toast.success("Coffee updated successfully");
            }
            console.log(data);
         });
   };

   return (
      <div className="my-16 mx-28">
         <Link
            to={"/"}
            className="rancho text-2xl text-shadow-lg text-shadow-slate-400 text-primary flex items-center gap-2 mb-8"
         >
            <FaArrowLeftLong size={18} /> Back to home
         </Link>

         <div className="bg-base-200 border-base-300 rounded-box border p-10">
            <div className="space-y-8 text-center mb-8">
               <h1 className="rancho text-primary text-5xl text-shadow-lg text-shadow-slate-400">
                  Update Existing Coffee Details
               </h1>
               <p className="text-secondary text-[18px] md:w-[88%] mx-auto">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here.
               </p>
            </div>

            <form onSubmit={handleUpdateCoffee}>
               <div className="grid md:grid-cols-2 gap-6">
                  <fieldset className="fieldset">
                     <label className="label text-[14px] text-primary font-medium">
                        Name
                     </label>
                     <input
                        type="text"
                        name="name"
                        defaultValue={coffee?.name}
                        placeholder="Enter coffee name"
                        className="input w-full focus-within:border-accent focus:outline-0"
                     />
                  </fieldset>

                  <fieldset className="fieldset">
                     <label className="label text-[14px] text-primary font-medium">
                        Chef
                     </label>
                     <input
                        type="text"
                        name="chef"
                        defaultValue={coffee?.chef}
                        placeholder="Enter coffee chef"
                        className="input w-full focus-within:border-accent focus:outline-0"
                     />
                  </fieldset>

                  <fieldset className="fieldset">
                     <label className="label text-[14px] text-primary font-medium">
                        Supplier
                     </label>
                     <input
                        type="text"
                        name="supplier"
                        defaultValue={coffee?.supplier}
                        placeholder="Enter coffee supplier"
                        className="input w-full focus-within:border-accent focus:outline-0"
                     />
                  </fieldset>

                  <fieldset className="fieldset">
                     <label className="label text-[14px] text-primary font-medium">
                        Taste
                     </label>
                     <input
                        type="text"
                        name="taste"
                        defaultValue={coffee?.taste}
                        placeholder="Enter coffee taste"
                        className="input w-full focus-within:border-accent focus:outline-0"
                     />
                  </fieldset>

                  <fieldset className="fieldset">
                     <label className="label text-[14px] text-primary font-medium">
                        Price
                     </label>
                     <input
                        type="text"
                        name="price"
                        defaultValue={coffee?.price}
                        placeholder="Enter coffee price"
                        className="input w-full focus-within:border-accent focus:outline-0"
                     />
                  </fieldset>

                  <fieldset className="fieldset">
                     <label className="label text-[14px] text-primary font-medium">
                        Details
                     </label>
                     <input
                        type="text"
                        name="details"
                        defaultValue={coffee?.details}
                        placeholder="Enter coffee details"
                        className="input w-full focus-within:border-accent focus:outline-0"
                     />
                  </fieldset>
               </div>

               <fieldset className="fieldset mt-6">
                  <label className="label text-[14px] text-primary font-medium">
                     Photo
                  </label>
                  <input
                     type="text"
                     name="photo"
                     defaultValue={coffee?.photo}
                     placeholder="Enter photo URL"
                     className="input w-full focus-within:border-accent focus:outline-0"
                  />
               </fieldset>

               <input
                  type="submit"
                  value="Update Coffee Details"
                  className="bg-accent btnHover w-full py-2 rancho text-[20px] border-2 border-[#331A15] rounded-[5px] my-6 cursor-pointer"
               />
            </form>
         </div>
      </div>
   );
};

export default UpdateCoffee;
