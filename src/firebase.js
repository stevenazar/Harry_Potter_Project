import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAHTcC6p25hDKxFecffiHfPPXC_imDVsnQ",
    authDomain: "harrypotter-5bfe6.firebaseapp.com",
    projectId: "harrypotter-5bfe6",
    storageBucket: "harrypotter-5bfe6.appspot.com",
    messagingSenderId: "673007644236",
    appId: "1:673007644236:web:48964f34c00ec2faf44ee9",
    measurementId: "G-43LLQTT4Y8"
})

const db = firebaseConfig.firestore();

const auth = firebase.auth();

export {db, auth}