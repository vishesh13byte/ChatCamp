import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    
        apiKey: "AIzaSyA8PYvx-BalB8DjQVo_wlleaJyBWULfQY4",
        authDomain: "chatcamp-f68e5.firebaseapp.com",
        projectId: "chatcamp-f68e5",
        storageBucket: "chatcamp-f68e5.appspot.com",
        messagingSenderId: "665397117073",
        appId: "1:665397117073:web:fb574a4e2930d52fdabf30"
      
}).auth();