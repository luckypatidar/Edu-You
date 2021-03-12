import firebase from 'firebase';

var firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCq_sW49suDiCpLNKvKBLlcG-ZfeFYqBfQ",
        authDomain: "react-login-detail.firebaseapp.com",
        projectId: "react-login-detail",
        storageBucket: "react-login-detail.appspot.com",
        messagingSenderId: "553852579679",
        appId: "1:553852579679:web:a61d881498d96a9435d0ea"
    }

)

var db = firebaseApp.firestore();
export { db }
export default firebaseApp