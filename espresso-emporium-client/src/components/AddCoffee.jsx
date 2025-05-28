import React from "react";

const AddCoffee = () => {
   return (
      <div className="bg-base-200 border-base-300 rounded-box border p-10 m-28">
         <div className="space-y-8 text-center mb-8">
            <h1 className="rancho text-primary text-5xl">Add New Coffee</h1>
            <p className="text-secondary text-[18px] md:w-[88%] mx-auto">
               It is a long established fact that a reader will be distraceted
               by the readable content of a page when looking at its layout. The
               point of using Lorem Ipsum is that it has a more-or-less normal
               distribution of letters, as opposed to using Content here.
            </p>
         </div>

         <form>
            <div className="grid md:grid-cols-2 gap-6">
               <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter coffee name"
                     className="input w-full focus-within:border-accent focus:outline-0"
                  />
               </fieldset>

               <fieldset className="fieldset">
                  <label className="label">Chef</label>
                  <input
                     type="text"
                     name="chef"
                     placeholder="Enter coffee chef"
                     className="input w-full focus-within:border-accent focus:outline-0"
                  />
               </fieldset>

               <fieldset className="fieldset">
                  <label className="label">Supplier</label>
                  <input
                     type="text"
                     name="supplier"
                     placeholder="Enter coffee supplier"
                     className="input w-full focus-within:border-accent focus:outline-0"
                  />
               </fieldset>

               <fieldset className="fieldset">
                  <label className="label">Taste</label>
                  <input
                     type="text"
                     name="taste"
                     placeholder="Enter coffee taste"
                     className="input w-full focus-within:border-accent focus:outline-0"
                  />
               </fieldset>

               <fieldset className="fieldset">
                  <label className="label">Category</label>
                  <input
                     type="text"
                     name="category"
                     placeholder="Enter coffee category"
                     className="input w-full focus-within:border-accent focus:outline-0"
                  />
               </fieldset>

               <fieldset className="fieldset">
                  <label className="label">Details</label>
                  <input
                     type="text"
                     name="details"
                     placeholder="Enter coffee details"
                     className="input w-full focus-within:border-accent focus:outline-0"
                  />
               </fieldset>
            </div>

            <fieldset className="fieldset">
               <label className="label">Photo</label>
               <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input w-full focus-within:border-accent focus:outline-0"
               />
            </fieldset>

            <input
               type="submit"
               value="Add Coffee"
               className="bg-accent w-full py-2 rancho text-[18px] border-2 border-[#331A15] rounded-[5px] my-6 cursor-pointer"
            />
         </form>
      </div>
   );
};

export default AddCoffee;
