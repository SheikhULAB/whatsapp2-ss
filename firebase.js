import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDPQ24wXHeE4yqdPORilpINV4wqRd3NkEA",
  authDomain: "whatsapp2-ss.firebaseapp.com",
  projectId: "whatsapp2-ss",
  storageBucket: "whatsapp2-ss.appspot.com",
  messagingSenderId: "413145841692",
  appId: "1:413145841692:web:645521d8617c5c9d9f5fd9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
