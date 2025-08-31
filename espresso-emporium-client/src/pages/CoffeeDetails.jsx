import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
   const { taste, name, photo, chef, supplier, details, price } =
      useLoaderData();

   return (
      <div className="mx-5 md:mx-28">
         <div className="mt-10 mb-16 max-w-7xl mx-auto">
            <Link
               to={"/"}
               className="rancho text-2xl text-shadow-lg text-shadow-slate-400 text-primary flex items-center gap-2 mb-8"
            >
               <FaArrowLeftLong size={18} /> Back to home
            </Link>

            <div className="bg-base-200 flex items-center px-5 md:px-10 py-14 rounded-lg">
               <div className="flex flex-col lg:flex-row items-center mx-auto">
                  <div className="border-4 rounded-tl-4xl rounded-br-4xl border-[#fff] shadow-md p-4 w-full lg:w-[30%]">
                     <img src={photo} alt="Coffee" className="w-full h-60" />
                  </div>

                  <div className="space-y-2 lg:ml-14 mt-10 lg:mt-0 w-full md:w-[70%]">
                     <h1 className="rancho text-3xl text-shadow-lg text-shadow-[#331a1583] text-[#331A15] mb-7">
                        Niceties
                     </h1>

                     <p>
                        <span className="font-semibold">Name:</span> {name}
                     </p>

                     <p>
                        <span className="font-semibold">Chef:</span> {chef}
                     </p>

                     <p>
                        <span className="font-semibold">Supplier:</span>{" "}
                        {supplier}
                     </p>

                     <p>
                        <span className="font-semibold">Taste:</span> {taste}
                     </p>

                     <p>
                        <span className="font-semibold">Price: </span> ${price}
                     </p>

                     <p>
                        <span className="font-semibold">Details:</span>{" "}
                        {details}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoffeeDetails;
