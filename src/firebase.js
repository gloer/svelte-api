import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCmUaJp8m0C35oASiJJVdqx_Yiz5aTpb6g",
    authDomain: "firestore-og-andre-ting.firebaseapp.com",
    databaseURL: "https://firestore-og-andre-ting.firebaseio.com",
    projectId: "firestore-og-andre-ting",
    storageBucket: "firestore-og-andre-ting.appspot.com",
    messagingSenderId: "483706265403",
    appId: "1:483706265403:web:cc39c22ff5b328253f611e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()