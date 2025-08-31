import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignIn = () => {
   const { signInUser } = useContext(AuthContext);
   const [showPassword, setShowPassword] = useState(false);

   const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");
      console.log(email, password);
      signInUser(email, password)
         .then((result) => {
            const signInInfo = {
               email,
               lastSignInTime: result.user?.metadata?.lastSignInTime,
            };

            // Update last sign in to the database
            fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
               method: "PATCH",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(signInInfo),
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
               });

            // form.reset();
         })
         .catch((error) => toast.error(error.code));
   };

   return (
      <div className="hero bg-base-200 min-h-screen py-12">
         <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className=" bg-base-100 w-full max-w-lg shrink-0 p-2 border-[5px] border-[#dedbd2] border-double rounded-2xl">
               <div className="card-body">
                  <h1 className="rancho text-primary text-center text-5xl text-shadow-lg text-shadow-slate-400">
                     Sign In Now
                  </h1>

                  <form onSubmit={handleSignIn} className="fieldset">
                     <label className="label">Email</label>
                     <input
                        type="email"
                        name="email"
                        placeholder="hiramcrosby@.gmail.com"
                        required
                        className="input w-full focus-within:border-accent focus:outline-0 mb-2"
                     />

                     <div className="relative">
                        <label className="label">Password</label>
                        <input
                           type={showPassword ? "text" : "password"}
                           name="password"
                           placeholder="********"
                           required
                           className="input w-full focus-within:border-accent focus:outline-0 mb-2"
                        />

                        <div className="absolute top-8 right-4 z-50">
                           {showPassword ? (
                              <FaEye
                                 size={16}
                                 onClick={() => setShowPassword(!showPassword)}
                                 className="text-[#bdbdbd] cursor-pointer"
                              />
                           ) : (
                              <FaEyeSlash
                                 size={16}
                                 onClick={() => setShowPassword(!showPassword)}
                                 className="text-[#bdbdbd] cursor-pointer"
                              />
                           )}
                        </div>
                     </div>

                     <div>
                        <a className="link link-hover">Forgot password?</a>
                     </div>

                     <button className="btn btn-accent btnHover mt-4 mb-3">
                        Sign In
                     </button>

                     <div>
                        <h5 className="text-center">
                           Don't have an account?{" "}
                           <Link
                              to={"/signup"}
                              className="hover:underline font-semibold"
                           >
                              Sign Up
                           </Link>
                        </h5>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
