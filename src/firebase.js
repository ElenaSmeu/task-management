// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyeJBLeovpIGz7eXtPopc2FIPpXfdw99c",
  authDomain: "taskmanagementapp-d87fc.firebaseapp.com",
  projectId: "taskmanagementapp-d87fc",
  storageBucket: "taskmanagementapp-d87fc.appspot.com",
  messagingSenderId: "160340108743",
  appId: "1:160340108743:web:307eea8033ce10097565e2",
  measurementId: "G-Q2383JGXCF"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp) ;
export default firebaseApp;

