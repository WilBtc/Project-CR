// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9prz2FpDl2SwjpYJ0Nn0YFZYzPlwqrWI",
    authDomain: "canales-en-costa-rica.firebaseapp.com",
    projectId: "canales-en-costa-rica",
    storageBucket: "canales-en-costa-rica.appspot.com",
    messagingSenderId: "59950128044",
    appId: "1:59950128044:web:6b940316b90b43c6843809",
    measurementId: "G-L22Q234VWR"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  export default app;