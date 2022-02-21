// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjhmJPGIrEXeLl7nO2bg8j-Ze6g3B-YEA",
    authDomain: "facebookclone2-39460.firebaseapp.com",
    projectId: "facebookclone2-39460",
    storageBucket: "facebookclone2-39460.appspot.com",
    messagingSenderId: "176282230198",
    appId: "1:176282230198:web:a9bdb2df2912ecb9a5f517",
    measurementId: "G-CENBKSN3BH"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();

  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export {auth , provider };

  export default db;