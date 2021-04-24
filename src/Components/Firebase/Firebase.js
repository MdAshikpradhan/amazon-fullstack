import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArVSPNkefHUfTCwEWCSD51bnx5hxDR3Lc",
    authDomain: "challenge-8e90d.firebaseapp.com",
    projectId: "challenge-8e90d",
    storageBucket: "challenge-8e90d.appspot.com",
    messagingSenderId: "402043563911",
    appId: "1:402043563911:web:8df3d219681afa45d4ad22"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth };