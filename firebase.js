// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, setDoc} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrzoMKWGu6IKcIswGYerm2J8OjtrnryeY",
  authDomain: "amtfit-app.firebaseapp.com",
  projectId: "amtfit-app",
  storageBucket: "amtfit-app.appspot.com",
  messagingSenderId: "323078243134",
  appId: "1:323078243134:web:1ee39587516da22dcf626f",
  measurementId: "G-F0GDZT8ZFL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14');
export function writeDailySpecial() {
  const docData = {
    description: 'A delicious vanilla latte',
    price: 3.99,
    milk: "whole",
    vegan: 'false',
  };

  setDoc(specialOfTheDay, docData);
}