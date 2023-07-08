import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAOlmvNOWvl403JrFBfzGAH4ce3yeCIJo",
  authDomain: "openinapp-aeecc.firebaseapp.com",
  projectId: "openinapp-aeecc",
  storageBucket: "openinapp-aeecc.appspot.com",
  messagingSenderId: "328901481801",
  appId: "1:328901481801:web:cbb17c9bb8377bd404f698",
  measurementId: "G-4D4WQJNFZG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
