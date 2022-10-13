import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmxiZ03CRKegPt6fgLCF9vH_E-vh43bTc",
  authDomain: "crwn-clothing-db-4116e.firebaseapp.com",
  projectId: "crwn-clothing-db-4116e",
  storageBucket: "crwn-clothing-db-4116e.appspot.com",
  messagingSenderId: "230291783973",
  appId: "1:230291783973:web:825576fb7dda21aa59dacc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//firestore

const db = getFirestore(app);

export const createUserDocFromAuth = async (user) => {
  const userDocRef = doc(db, "users", user.uid);
  console.log(userDocRef);

  //getting the data and checking if it exists using .exists()
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //creating data
  try {
    if (!userSnapshot.exists()) {
      const { email, displayName } = user;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
