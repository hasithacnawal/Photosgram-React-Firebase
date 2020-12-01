import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyALxP2PXRgcb2l0kZ_x690HZD3o8mDPlH4",
  authDomain: "firegram-e674e.firebaseapp.com",
  databaseURL: "https://firegram-e674e.firebaseio.com",
  projectId: "firegram-e674e",
  storageBucket: "firegram-e674e.appspot.com",
  messagingSenderId: "1049899509906",
  appId: "1:1049899509906:web:f8cefed97e720ce307de4b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
