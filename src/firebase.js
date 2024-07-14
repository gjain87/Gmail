import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuofs8yayOn_0vcTEkFTgilfYHPscp-8M",
  authDomain: "clone-90590.firebaseapp.com",
  projectId: "clone-90590",
  storageBucket: "clone-90590.appspot.com",
  messagingSenderId: "815889773437",
  appId: "1:815889773437:web:edf7af1051be171b0a9214",
  measurementId: "G-0LKTDXZED8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
