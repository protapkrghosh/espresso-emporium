import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   deleteUser,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const currentUser = auth.currentUser;

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const removeUser = () => {
      return deleteUser(currentUser);
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
      signInUser,
      removeUser,
   };

   return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
