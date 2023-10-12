import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA2Xjmyhs-xiEU9DKzE4PK_5meiScBnFN0",
  authDomain: "projeto71-75636.firebaseapp.com",
  projectId: "projeto71-75636",
  storageBucket: "projeto71-75636.appspot.com",
  messagingSenderId: "482344104164",
  appId: "1:482344104164:web:35e15aca19c0e011d77cf1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
