import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, set, update, onValue, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-IlJUAbKBzCsMsqsDnu4j2SaJGosR4Hs",
  authDomain: "windows-d031e.firebaseapp.com",
  databaseURL: "https://windows-d031e-default-rtdb.firebaseio.com/",
  projectId: "windows-d031e",
  storageBucket: "windows-d031e.firebasestorage.app",
  messagingSenderId: "874765961451",
  appId: "1:874765961451:web:87cb24b031c91744bf56ae"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, ref, push, set, update, onValue, remove, auth, signInWithEmailAndPassword, signOut, onAuthStateChanged };
