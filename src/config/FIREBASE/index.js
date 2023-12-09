import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyA38cKfUUvwvAtHtz0MIFq2OchoJWpYK7M",
    authDomain: "noteapp-4020f.firebaseapp.com",
    databaseURL: "Bhttps://noteapp-4020f-default-rtdb.firebaseio.com/",
    projectId: "noteapp-4020f",
    storageBucket: "noteapp-4020f.appspot.com",
    messagingSenderId: "386043445620",
    appId: "1:386043445620:web:ccb52e3137c04560ccac21"
});

const FIREBASE = firebase;

export default FIREBASE;