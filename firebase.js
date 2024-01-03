import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA2tMgLMJgE4fj0sQbN6hYVb2ZDAIq5wHw",
        authDomain: "portalnoticias-49218.firebaseapp.com",
        projectId: "portalnoticias-49218",
        storageBucket: "portalnoticias-49218.appspot.com",
        messagingSenderId: "440842997921",
        appId: "1:440842997921:web:47881762b9636127eee0e0"
    });

    const db = firebase.firestore();

    export {db};