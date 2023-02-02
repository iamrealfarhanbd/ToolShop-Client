// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYi66zKLQtlzZmqvTSeAdYgLMgvi7_LOg",
  authDomain: "toolshop-56a24.firebaseapp.com",
  projectId: "toolshop-56a24",
  storageBucket: "toolshop-56a24.appspot.com",
  messagingSenderId: "297426747490",
  appId: "1:297426747490:web:d627fd78e1a7e41287513b"
};
console.log(process.env.apiKey)


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;