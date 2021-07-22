// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyAi9oBP-hXAU43ubGEkmF3eXmWl48dNVK0',
  authDomain: 'smart-list-cs.firebaseapp.com',
  projectId: 'smart-list-cs',
  storageBucket: 'smart-list-cs.appspot.com',
  messagingSenderId: '24601715025',
  appId: '1:24601715025:web:037051b48a46727f657370',
  measurementId: 'G-MXNYC50JM5',
};

let firebaseInstance = firebase.initializeApp(firebaseConfig);
const db = firebaseInstance.firestore();
export { db };
