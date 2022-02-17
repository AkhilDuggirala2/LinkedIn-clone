import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9-B_FE4t97qaLDhZL6Ql9pkKHJatzJfM",
  authDomain: "linkedin-clone-build-8ff8d.firebaseapp.com",
  projectId: "linkedin-clone-build-8ff8d",
  storageBucket: "linkedin-clone-build-8ff8d.appspot.com",
  messagingSenderId: "643923266688",
  appId: "1:643923266688:web:9f238e02ecacf8a31dea65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
