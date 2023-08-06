import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgp8m2cw7bKw2KNmFxfgbuB4RUZJwr6VA",
    authDomain: "staking-birds.firebaseapp.com",
    projectId: "staking-birds",
    storageBucket: "staking-birds.appspot.com",
    messagingSenderId: "157738863860",
    appId: "1:157738863860:web:1cc22415926d31f56fe2a1",
    measurementId: "G-QCGW4KXWR2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);