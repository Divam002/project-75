import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDgfiOQeaLTseIqcwG4zjip-CD9uApjB-8",
  authDomain: "e-ride-633c2.firebaseapp.com",
  projectId: "e-ride-633c2",
  storageBucket: "e-ride-633c2.appspot.com",
  messagingSenderId: "206381882922",
  appId: "1:206381882922:web:bb3d859e98a0e9c1846d53"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
