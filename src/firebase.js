// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDV1CfYx8UVNwk7HjXCGqx2EiEsJXyeNqM",
    authDomain: "hurri-social.firebaseapp.com",
    projectId: "hurri-social",
    storageBucket: "hurri-social.appspot.com",
    messagingSenderId: "336297577826",
    appId: "1:336297577826:web:e703bae8cae366a892f03b",
    measurementId: "G-7ZM7WLFX9G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;