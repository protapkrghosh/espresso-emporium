import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: `${import.meta.env.VITE_COFFEE_APIKEY}`,
   authDomain: `${import.meta.env.VITE_COFFEE_AUTHDOMAIN}`,
   projectId: `${import.meta.env.VITE_COFFEE_PROJECTID}`,
   storageBucket: `${import.meta.env.VITE_COFFEE_STORAGEBUCKET}`,
   messagingSenderId: `${import.meta.env.VITE_COFFEE_MESSAGINGSENDERID}`,
   appId: `${import.meta.env.VITE_COFFEE_APPID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
