import firebase from 'firebase';

try {
  var config = {
   apiKey: "AIzaSyBMrcRj-FD9Yk6NQuazr8g3Qv8RozOJoLE",
    authDomain: "react-monsta-dev.firebaseapp.com",
    databaseURL: "https://react-monsta-dev.firebaseio.com",
    projectId: "react-monsta-dev",
    storageBucket: "react-monsta-dev.appspot.com",
    messagingSenderId: "77140180232"
  }

  firebase.initializeApp(config);
} catch (e) {

}

// - Storage reference
export var storageRef = firebase.storage().ref()

// - Database authorize
export var firebaseAuth = firebase.auth
export var firebaseRef = firebase.database().ref()

// - Firebase default
export default firebase;
