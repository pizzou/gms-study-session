import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDi75B-UALgmRaQyno0s2bDD1gWdjzzAt0",
  authDomain: "bwa-chat.firebaseapp.com",
  projectId: "bwa-chat",
  storageBucket: "bwa-chat.appspot.com",
  messagingSenderId: "959266396840",
  appId: "1:959266396840:web:9682d12d21c256d930409d"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};