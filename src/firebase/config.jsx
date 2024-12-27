
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCvKkvWLZOA0BmfAqb9891q5fi3w7I8sqA",
  authDomain: "miniblog-1cae6.firebaseapp.com",
  projectId: "miniblog-1cae6",
  storageBucket: "miniblog-1cae6.firebasestorage.app",
  messagingSenderId: "461851894653",
  appId: "1:461851894653:web:1613cc10dfc813ceb32214"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db, app}