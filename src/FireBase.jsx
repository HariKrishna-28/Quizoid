import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXicNPOyqWTNoqVF_F57jbxo25BDCCnhs",
    authDomain: "leaderboards-e30d5.firebaseapp.com",
    databaseURL: "https://leaderboards-e30d5-default-rtdb.firebaseio.com",
    projectId: "leaderboards-e30d5",
    storageBucket: "leaderboards-e30d5.appspot.com",
    messagingSenderId: "869481594566",
    appId: "1:869481594566:web:28994d72608a6ccc9121c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;