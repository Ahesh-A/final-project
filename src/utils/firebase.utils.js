// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1t5ShuwhX3kMfvnp1-GQfbnbZLAv-sik",
  authDomain: "aa-appraels.firebaseapp.com",
  projectId: "aa-appraels",
  storageBucket: "aa-appraels.appspot.com",
  messagingSenderId: "125888504129",
  appId: "1:125888504129:web:b7a145794270c858c241c0",
  measurementId: "G-DJ9CKBFJBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const googleSignIn = async() => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      
    
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode, errorMessage, email, credential);
    });
};

export const onAuthStateChangedListener = (callBack) =>
  onAuthStateChanged(auth, callBack);
export const googleSignOut = () => {
  signOut(auth)
    .then(() => {
      alert("signed out successfully");
    })
    .catch((error) => {
      alert(error);
    });
};

export const signInWithGoogleEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });

export const createUserWithGoogleEmailAndPassword = (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};


export const instertData = async () => 
  await setDoc(doc(db, "products", "women"), {
    id : "women1",
    imageUrl: "",
    name : "Women's Crepe Fit and Flare Maxi Casual Dress",
    price: 899,
  });
