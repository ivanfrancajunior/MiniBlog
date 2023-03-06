
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbxMzthgZ9yzu5gxbvg7onY9HkHZIpMwk",
  authDomain: "miniblog-v2.firebaseapp.com",
  projectId: "miniblog-v2",
  storageBucket: "miniblog-v2.appspot.com",
  messagingSenderId: "1016744851045",
  appId: "1:1016744851045:web:8b30292b07d8e2143df88c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }