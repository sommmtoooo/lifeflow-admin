import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrdep7uEhcBb5g6ozPRYhgKuf1fpFDBTg",
  authDomain: "lifeflow-898f6.firebaseapp.com",
  projectId: "lifeflow-898f6",
  storageBucket: "lifeflow-898f6.appspot.com",
  messagingSenderId: "28560610733",
  appId: "1:28560610733:web:e4c29173f235328c043d24",
  measurementId: "G-T7E0P2ZRD6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);

export { firebaseConfig, database };
