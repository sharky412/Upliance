// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaY2NnvzTS1QcT8WovTOFbL6SneJQsAcU",
  authDomain: "upliance-cf360.firebaseapp.com",
  projectId: "upliance-cf360",
  storageBucket: "upliance-cf360.firebasestorage.app",
  messagingSenderId: "582730917210",
  appId: "1:582730917210:web:650199465ebbbd9604ff63",
  measurementId: "G-XNBES41TJV"
};
// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Get Firebase Auth Instance
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // Returns user details
  } catch (error) {
    console.error("Google Sign-in Error:", error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { auth };