import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiOn-djBx_W_I7p7RUv5oUPOaC-l6Pvr4",
  authDomain: "uber-eats-clone-344618.firebaseapp.com",
  projectId: "uber-eats-clone-344618",
  storageBucket: "uber-eats-clone-344618.appspot.com",
  messagingSenderId: "111029880874",
  appId: "1:111029880874:web:2fe4462d6cc88a6b441b53",
  measurementId: "G-B09052NZ69",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
