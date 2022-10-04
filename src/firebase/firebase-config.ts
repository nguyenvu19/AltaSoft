import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzSCZ2tsPCk5TGAXNAQ-lXvUbLJP8f_iQ",
  authDomain: "project1-c82bc.firebaseapp.com",
  projectId: "project1-c82bc",
  storageBucket: "project1-c82bc.appspot.com",
  messagingSenderId: "557575493063",
  appId: "1:557575493063:web:e1b9c5dd0a1fdc1604b5e2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
