// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDf_KVmb786fY82StUB27oJDPmo681Nm-Q",
  authDomain: "fishemonn.firebaseapp.com",
  projectId: "fishemonn",
  storageBucket: "fishemonn.appspot.com",  // ✅ fixed here
  messagingSenderId: "158933709247",
  appId: "1:158933709247:web:7b4c409847959ecc09710a",
  measurementId: "G-TZ973Q8WBX"  // optional, but unused in RN
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);