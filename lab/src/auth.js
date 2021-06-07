import firebase from './Config.js';
import firebase from "firebase/app";
import "firebase/auth";

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
});