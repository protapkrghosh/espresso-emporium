import React from "react";

const SignIn = () => {
   const handleSignIn = (e) => {};

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

                     <label className="label">Password</label>
                     <input
                        type="password"
                        name="password"
                        placeholder="********"
                        required
                        className="input w-full focus-within:border-accent focus:outline-0 mb-2"
                     />
                     
                     <div>
                        <a className="link link-hover">Forgot password?</a>
                     </div>

                     <button className="btn btn-accent btnHover mt-4">
                        Sign In
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
