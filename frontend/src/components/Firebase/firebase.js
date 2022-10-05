import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBePc3Xe2VZIY2lBHuMCOLsqlPZH4jUzn8",
  authDomain: "ma-bibliotheque-numeriqu-da220.firebaseapp.com",
  projectId: "ma-bibliotheque-numeriqu-da220",
  storageBucket: "ma-bibliotheque-numeriqu-da220.appspot.com",
  messagingSenderId: "933789353973",
  appId: "1:933789353973:web:8c7d5cca0fb42b500f42bc",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  // Signup
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Signin
  signinUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Signout
  signoutUser = () => this.auth.signOut();

  // Reset password
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  // Cloud Firestore
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;
