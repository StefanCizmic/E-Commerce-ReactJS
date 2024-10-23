import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyDBaZBWpWVoMc3xhMhq5KplVa-5gIIQ5GY",
  authDomain: "e-commerce-35692.firebaseapp.com",
  projectId: "e-commerce-35692",
  storageBucket: "e-commerce-35692.appspot.com",
  messagingSenderId: "909150980128",
  appId: "1:909150980128:web:db47ba7a3bfbcb40b61445",
  measurementId: "G-LW2DP9RGSJ"
};

const app = initializeApp(firebaseConfig);
export const recordsData = getFirestore(app);