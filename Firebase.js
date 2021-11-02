import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDEZrhpHLEG0G07v_iRVp-JZlEdQjw1P0Y",
    authDomain: "desarrollor-web-frontend.firebaseapp.com",
    projectId: "desarrollor-web-frontend",
    storageBucket: "desarrollor-web-frontend.appspot.com",
    messagingSenderId: "581922168425",
    appId: "1:581922168425:web:74be044cf2d852d9d78cf8"
  };
  
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;