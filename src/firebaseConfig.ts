// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwBeqjrOuiBlL2Wx2N6UEvNgEsJJExLV0",
  authDomain: "suns-building.firebaseapp.com",
  projectId: "suns-building",
  storageBucket: "suns-building.firebasestorage.app",
  messagingSenderId: "968615537030",
  appId: "1:968615537030:web:19197a6807723b5efa2407",
  measurementId: "G-W5Q49ZP4YV"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firestore para usar nas outras partes do projeto
const db = getFirestore(app);
export { db };
