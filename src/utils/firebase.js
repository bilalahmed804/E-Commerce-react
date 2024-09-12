// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBevb3qpbRorWGQtGXNclCC0k0Mn484Ysk",
  authDomain: "webnavbar.firebaseapp.com",
  projectId: "webnavbar",
  storageBucket: "webnavbar.appspot.com",
  messagingSenderId: "887551563504",
  appId: "1:887551563504:web:147f0fcd0426953f225435",
  measurementId: "G-L090E9VT0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {
    app,
    auth,
}
