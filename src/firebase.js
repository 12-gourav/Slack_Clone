import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBX1ue7w14Y3eM6aa4S1L2hTqdSUNtzBJk",
    authDomain: "slackclone-128ca.firebaseapp.com",
    projectId: "slackclone-128ca",
    storageBucket: "slackclone-128ca.appspot.com",
    messagingSenderId: "282297787342",
    appId: "1:282297787342:web:f8281a6b01536c95c7419f",
    measurementId: "G-NTC0JXBNV1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  console.log(firebaseApp);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export const storage = getStorage(firebaseApp);
  export {auth,provider};
  export default db;