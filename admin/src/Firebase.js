import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6t_fWep6R20tCJo4N8JC9pIKnYWo3GWM",
  authDomain: "netflix-810c8.firebaseapp.com",
  projectId: "netflix-810c8",
  storageBucket: "netflix-810c8.appspot.com",
  messagingSenderId: "302417401260",
  appId: "1:302417401260:web:ed1fe34e7bf24344589609",
  measurementId: "G-W0CLRM97Z9",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
