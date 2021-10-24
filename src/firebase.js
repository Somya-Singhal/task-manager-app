import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = firebase.initializeApp ({
  apiKey: "AIzaSyC_wbiYcq2WUsVATUINzLyq-otUI2-giw8",
  authDomain: "task-manger-app.firebaseapp.com",
  databaseURL: "https://task-manger-app-default-rtdb.firebaseio.com",
  projectId: "task-manger-app",
  storageBucket: "task-manger-app.appspot.com",
  messagingSenderId: "347305623554",
  appId: "1:347305623554:web:35aedad5c925f127e0671b"
});
export { firebaseConfig as firebase };