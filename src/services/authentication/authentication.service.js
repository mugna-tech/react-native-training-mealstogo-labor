import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1VUJ5V6nQkkMdQDz3tBvhOrqLCfufARc",
  authDomain: "mealstogo-38f49.firebaseapp.com",
  projectId: "mealstogo-38f49",
  storageBucket: "mealstogo-38f49.appspot.com",
  messagingSenderId: "804461073123",
  appId: "1:804461073123:web:3525186c35acd470eeabd6",
};
const app = initializeApp(firebaseConfig);
const authenticate = getAuth(app);

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(authenticate, email, password);
};
