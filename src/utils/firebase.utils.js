// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  getDocs,
  getDoc
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

//require("dotenv").config({path: __dirname + './../../.env'});

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

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMIAN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.API_KEY,
//   measurementId: process.env.MEASUREMENT_ID,
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const { uid, email, displayName: first_name } = user;
      insertUser({ uid, email, first_name });
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
  signInWithEmailAndPassword(auth, email, password);
// .then((userCredential) => {
//   const user = userCredential.user;
//   console.log(user);
// })
// .catch((error) => {
//   if (error.code === "auth/invalid-email") alert("no such user...");
//   console.log(error);
// });

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
      await insertUser({ uid, first_name, last_name, phone_number, email });
      //console.log({ uid, first_name, last_name, phone_number });
      alert(`Welcome ${first_name + last_name}`);
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
export const insertProdInfo = async (data) => {
  await setDoc(doc(db, "prod_info", data.id), data);
};

export const insertAddProdInfo = async (data) => {
  data.map(async (item) => {
    const { info } = item;
    await setDoc(doc(db, "prod_info", info.id), info);
  });
};

export const getProdInfo = async () => {
  const docRef = collection(db, "prod_info");
  const q = query(docRef);
  const docSnap = await getDocs(q);
  return docSnap.docs.map((doc) => doc.data());
};

export const getData = async () => {
  try {
    const docRef = collection(db, "d_products");
    const q = query(docRef);
    const querySnapShot = await getDocs(q);
    return querySnapShot.docs.map((doc) => doc.data());
  } catch (error) {
    alert(error);
  }
};

export const getUsers = async () => {
  const docRef = collection(db, "users");
  const q = query(docRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((doc) => doc.data());
};

export const updateUser = async (uid, data) => {
  const users = await getUsers();
  const res = Object.values(users).find((user) => user.uid === uid);
  await setDoc(doc(db, "users", uid), { ...res, ...data });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unSubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const insertItemsToDeliver = async (item) => {
  const { user, cartItems } = item;
  // const prodId = cartItems.reduce((acc, item) => acc + item.id, "");
  const deliverId = `${Date.now()}${user.uid}`;
  console.log("Deliver ID :", deliverId);
  // console.log(user.uid + prodId);
  await setDoc(doc(db, "Items_to_deliver", user.uid), {
    ...user,
    cartItems,
    deliverId,
  });
};

export const getMyOrders = async (uid) => {
  const docRef = doc(db, "Items_to_deliver", uid);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) return docSnap.data();
};
