// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA2SKV4vpyMI9pxNCvXHI_26Sr89iWmGuQ",
    authDomain: "linkdin-clone-fac23.firebaseapp.com",
    projectId: "linkdin-clone-fac23",
    storageBucket: "linkdin-clone-fac23.appspot.com",
    messagingSenderId: "9160071545",
    appId: "1:9160071545:web:81fd81686610257f4677a8",
    measurementId: "G-56BT6GTHFY"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  export {db,auth}