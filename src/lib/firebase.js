// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyCbHPaQGPTxbqtofYtDgUpk9VwHWfebXjo',
  authDomain: 'smart-list-project.firebaseapp.com',
  projectId: 'smart-list-project',
  storageBucket: 'smart-list-project.appspot.com',
  messagingSenderId: '904551609705',
  appId: '1:904551609705:web:4e8eb9253b4bd26b1a79f8',
  measurementId: 'G-6L7D38C59X',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let firebaseInstance = firebase.initializeApp(firebaseConfig);
const db = firebaseInstance.firestore();
export { db };
