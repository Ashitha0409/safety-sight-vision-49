import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBrUqnbns9mFsOinfSzQ4fQ5dXH8kKVUew",
  authDomain: "drishti-1ff06.firebaseapp.com",
  databaseURL: "https://drishti-1ff06-default-rtdb.firebaseio.com",
  projectId: "drishti-1ff06",
  storageBucket: "drishti-1ff06.appspot.com", // ✅ fixed this
  messagingSenderId: "455337251820",
  appId: "1:455337251820:web:4396e3ff9f30a31e4166c9",
  measurementId: "G-K5YX1J51MK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
