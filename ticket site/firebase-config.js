import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDPh3dJ37auy21L70Mekm_ikuIfeD8wCZU",

  authDomain: "channelplus-8c219.firebaseapp.com",

  projectId: "channelplus-8c219",

  storageBucket: "channelplus-8c219.firebasestorage.app",

  messagingSenderId: "178858225057",

  appId: "1:178858225057:web:63c327bf23eb877f196fe0"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);