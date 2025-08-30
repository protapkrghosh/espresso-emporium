import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   deleteUser,
   onAuthStateChanged,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const signInUser = auth.currentUser;

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const removeUser = () => {
      return deleteUser(signInUser);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const userInfo = {
      user,
      createUser,
      removeUser,
   };

   return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
