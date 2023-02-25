// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
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

export const googleSignIn = async () => {
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
export const googleSignOut = async () => {
  await signOut(auth)
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
      if (error.code === "auth/invalid-email") alert("no such user...");
      console.log(error);
    });
export const insertUser = async (data) => {
  const { uid } = data;
  await setDoc(doc(db, "users", uid), data);
};
export const createUserWithGoogleEmailAndPassword = (
  email,
  password,
  first_name,
  last_name,
  phone_number
) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const { uid } = user;
      await insertUser({uid, first_name, last_name, phone_number,email});
      //console.log({ uid, first_name, last_name, phone_number });
    })
    .catch((error) => {
      alert(error.code);
    });
};

export const instertData = (data) => {
  data.map(async (item) => {
    const { title } = item;
    await setDoc(doc(db, "d_products", title.toLowerCase()), item);
  });
};

export const getData = async () => {
  const docRef = collection(db, "d_products");
  const q = query(docRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((doc) => doc.data());
};


export const getUsers = async() => {
  const docRef = collection(db, "users" );
  const q = query(docRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((doc) => doc.data());
}

export const updateUser = async(uid, data ) => {
  await setDoc(doc(db, "users", uid), data);
}