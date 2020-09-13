import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2mxrQ3GSQhKYF0WbRf59rYUoW_PkUF1A",
  authDomain: "twitter-clone-59914.firebaseapp.com",
  databaseURL: "https://twitter-clone-59914.firebaseio.com",
  projectId: "twitter-clone-59914",
  storageBucket: "twitter-clone-59914.appspot.com",
  messagingSenderId: "889378950444",
  appId: "1:889378950444:web:9c5dea53450af2b66fb089",
  measurementId: "G-5LPTTJP9B1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
