const firebaseConfig = {
    // TODO-6
    piKey: "AIzaSyDUg6PYQBr8PQurgN1QozupLNUt-APps9U",
    authDomain: "http-29a3e.firebaseapp.com",
    databaseURL: "https://http-29a3e-default-rtdb.firebaseio.com",
    projectId: "http-29a3e",
    storageBucket: "http-29a3e.appspot.com",
    messagingSenderId: "61979009238",
    appId: "1:61979009238:web:45571aa323402f5ddbe977",
    measurementId: "G-8KRKTQLWFP"
};
const albums = require('./albums.json');
const firebase = require('firebase');

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
    db.collection("albums")
        .add({
            name: obj.name,
            band: obj.band,
            genre: obj.genre,
            label: obj.label,
            producer: obj.producer,
            releaseDate: new Date(obj.releaseDate)
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});
