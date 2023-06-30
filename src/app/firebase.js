  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDSGIF1u10Ovfn-TL2UKFpDrfSpjwkSP7Q",
    authDomain: "fir-autenticacion-d4341.firebaseapp.com",
    projectId: "fir-autenticacion-d4341",
    storageBucket: "fir-autenticacion-d4341.appspot.com",
    messagingSenderId: "1051171777938",
    appId: "1:1051171777938:web:b3c3801ec6d7695489254b",
    measurementId: "G-NJEX9PSP0R"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
console.log(app);