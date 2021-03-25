import firebase from "firebase";
//Initialize Firebase
export const firebaseInitialze = () => {
    const firebaseConfig = {
    apiKey: "AIzaSyDjxpW0xPHPlh-MV4BxoJ6LH3hnJMo9Edo",
    authDomain: "frontenddiploma.firebaseapp.com",
    projectId: "frontenddiploma",
    storageBucket: "frontenddiploma.appspot.com",
    messagingSenderId: "49895695964",
    appId: "1:49895695964:web:c8a53446e1bd004d62a899",
    measurementId: "G-N88RWTGXBL",
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
