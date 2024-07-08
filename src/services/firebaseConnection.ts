
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCLF-Z1ND2JjQnFFdlfdqNfOi9Qvqhwdo",
  authDomain: "tarefasplus-6d3cf.firebaseapp.com",
  projectId: "tarefasplus-6d3cf",
  storageBucket: "tarefasplus-6d3cf.appspot.com",
  messagingSenderId: "1042614221094",
  appId: "1:1042614221094:web:0120e50807a81e1b61e9e7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore()

export { db }