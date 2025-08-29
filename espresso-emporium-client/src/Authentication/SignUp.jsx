import React, { use } from 'react';
import { AuthContext } from './contexts/AuthContext';

const SignUp = () => {
   const { createUser } = use(AuthContext);
   console.log(createUser);

   return (
      <div>
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
               <div className=" bg-base-100 w-full max-w-lg shrink-0 p-2 border-[5px] border-[#dedbd2] border-double rounded-2xl">
                  <div className="card-body">
                     <h1 className="rancho text-primary text-center text-5xl text-shadow-lg text-shadow-slate-400">
                        Sign Up
                     </h1>

                     <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                           type="email"
                           placeholder="Email"
                           className="input w-full focus-within:border-accent focus:outline-0"
                        />
                        <label className="label">Password</label>
                        <input
                           type="password"
                           placeholder="Password"
                           className="input w-full focus-within:border-accent focus:outline-0"
                        />
                        <div>
                           <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-accent btnHover mt-4">
                           Sign Up
                        </button>
                     </fieldset>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;