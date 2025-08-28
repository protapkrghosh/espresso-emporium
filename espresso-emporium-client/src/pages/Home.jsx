import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";
import { BsCupFill } from "react-icons/bs";

const Home = () => {
   const loadedCoffees = useLoaderData();
   const [coffees, setCoffees] = useState(loadedCoffees);

   return (
      <div className="text-center backgroundImg1 mt-28">
         {/* Our Popular Product */}
         <div className="p-28 backgroundImg2">
            <p className="text-[#1B1A1A] mb-2">-- Sip & Savor --</p>
            <h1 className="rancho text-5xl text-shadow-lg text-shadow-[#331a15be] text-[#331A15]">
               Our Popular Products
            </h1>

            <Link
               to={"/add-coffee"}
               className="bg-accent btnHover px-4 py-2 rancho text-[20px] border-2 border-[#331A15] rounded-[5px] my-6 cursor-pointer flex items-center gap-2 mx-auto w-fit"
            >
               Add Coffee <BsCupFill />
            </Link>

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-7xl mx-auto">
               {coffees.map((coffee) => (
                  <CoffeeCard
                     key={coffee?._id}
                     coffee={coffee}
                     coffees={coffees}
                     setCoffees={setCoffees}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Home;
