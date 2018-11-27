import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCODyIQh5gzW6e6AA6WX0Nb8_8_GDHKT2M",
  authDomain: "react-slack-49db7.firebaseapp.com",
  databaseURL: "https://react-slack-49db7.firebaseio.com",
  projectId: "react-slack-49db7",
  storageBucket: "react-slack-49db7.appspot.com",
  messagingSenderId: "840617203247"
};
firebase.initializeApp(config);

export default firebase;
