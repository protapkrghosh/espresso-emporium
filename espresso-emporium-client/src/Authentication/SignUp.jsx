import React, { use, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import toast from "react-hot-toast";

const SignUp = () => {
   const { createUser } = useContext(AuthContext);

   const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const { email, password, ...restFormData } = Object.fromEntries(
         formData.entries()
      );
      // const email = formData.get("email"); // This is another way of getting form input value
      // const password = formData.get("password"); // This is another way of getting form input value

      // Create user in the firebase
      createUser(email, password)
         .then((result) => {
            console.log(result.user);
            const userProfile = {
               email,
               ...restFormData,
               creationTime: result.user?.metadata.creationTime,
               lastSignInTime: result.user?.metadata.lastSignInTime,
            };

            // Save profile info in the DB
            fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(userProfile),
               // body: JSON.stringify({ email, ...restFormData, creationTime, lastSignInTime }), // Alternative way
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.insertedId) {
                     toast.success("User has been added successfully");
                  }
               });
         })
         .catch((error) => console.log(error));
   };

   return (
      <div className="hero bg-base-200 min-h-screen py-12">
         <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className=" bg-base-100 w-full max-w-lg shrink-0 p-2 border-[5px] border-[#dedbd2] border-double rounded-2xl">
               <div className="card-body">
                  <h1 className="rancho text-primary text-center text-5xl text-shadow-lg text-shadow-slate-400">
                     Sign Up
                  </h1>

                  <form onSubmit={handleSignUp} className="fieldset">
                     <label className="label">Name</label>
                     <input
                        type="text"
                        name="name"
                        placeholder="Hiram Crosby"
                        required
                        className="input w-full focus-within:border-accent focus:outline-0 mb-2"
                     />

                     <label className="label">Address</label>
                     <input
                        type="text"
                        name="address"
                        placeholder="789 Pine Lane, Austin"
                        required
                        className="input w-full focus-within:border-accent focus:outline-0 mb-2"
                     />

                     <label className="label">Phone</label>
                     <input
                        type="phone"
                        name="phone"
                        placeholder="+1 (555) 987-6543"
                        required
                        className="input w-full focus-within:border-accent focus:outline-0 mb-2"
                     />

                     <label className="label">Photo URL</label>
                     <input
                        type="text"
                        name="photoURL"
                        placeholder="https://cdn.pixabay.com/photo/bird.jpg"
                        required
                        className="input w-full focus-within:border-accent focus:outline-0 mb-2"
                     />

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

                     <button className="btn btn-accent btnHover mt-4">
                        Sign Up
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
