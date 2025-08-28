import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router";

const CoffeeDetails = () => {
   const { id } = useParams();
   const coffee = useLoaderData();

   return (
      <div className="mx-5 md:mx-28">
         <div className="mt-10 max-w-7xl mx-auto">
            <Link
               to={"/"}
               className="rancho text-2xl text-shadow-lg text-shadow-slate-400 text-primary flex items-center gap-2 mb-8"
            >
               <FaArrowLeftLong size={18} /> Back to home
            </Link>

            <div className="bg-base-200 flex items-center py-16 rounded-lg">
               <div className="flex items-center mx-auto">
                  <div>
                     <img
                        src={coffee?.photo}
                        alt="Coffee"
                        className="w-full h-72"
                     />
                  </div>

                  <div className="space-y-2 ml-14">
                     <h1 className="rancho text-3xl text-shadow-lg text-shadow-[#331a1583] text-[#331A15] mb-7">
                        Niceties
                     </h1>

                     <p>
                        <span className="font-semibold">Name:</span>{" "}
                        {coffee?.name}
                     </p>

                     <p>
                        <span className="font-semibold">Chef:</span>{" "}
                        {coffee?.chef}
                     </p>

                     <p>
                        <span className="font-semibold">Supplier:</span>{" "}
                        {coffee?.supplier}
                     </p>

                     <p>
                        <span className="font-semibold">Taste:</span>{" "}
                        {coffee?.taste}
                     </p>

                     <p>
                        <span className="font-semibold">Price: </span>{" "}$
                        {coffee?.price}
                     </p>

                     <p>
                        <span className="font-semibold">Details:</span>{" "}
                        {coffee?.details}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoffeeDetails;
