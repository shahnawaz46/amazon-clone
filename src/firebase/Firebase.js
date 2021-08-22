import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-W8Pl08LA7bMqvb1ATbhp0Ey-MAy7jhY",
    authDomain: "clone-5e57e.firebaseapp.com",
    projectId: "clone-5e57e",
    storageBucket: "clone-5e57e.appspot.com",
    messagingSenderId: "575650156382",
    appId: "1:575650156382:web:d6073f0b3a8678cb9e09cf"
};

export const Firebase = firebase.initializeApp(firebaseConfig)