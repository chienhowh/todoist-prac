import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnRR6mck2FU8W92FBBNiPOGftG9tS-Vmc",
  authDomain: "todolist-6aa3e.firebaseapp.com",
  databaseURL: "https://todolist-6aa3e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-6aa3e",
  storageBucket: "todolist-6aa3e.appspot.com",
  messagingSenderId: "932002376988",
  appId: "1:932002376988:web:3a84bfbbdb62602e3bded9"
};

const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase
export default firebaseApp