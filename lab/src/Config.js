import firebase from 'firebase/app'
import 'firebase/firestore';
import app from './base'

// Database connection
const firebaseConfig = {
    apiKey: "AIzaSyCZi-Q1SPfCX64V3-LBglMB775ny5Cb6vU",
    authDomain: "todoproject-6bb92.firebaseapp.com",
    projectId: "todoproject-6bb92",
    storageBucket: "todoproject-6bb92.appspot.com",
    messagingSenderId: "307762661370",
    appId: "1:307762661370:web:d1fabd10e47504cc74c643",
    measurementId: "G-Y3FK23QBZD"
};

export const db = app.firestore();