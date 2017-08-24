import firebase from 'firebase';

try {
  var config = {
   apiKey: "AIzaSyDs6b8KR-tDC7Yc_Hy7h_eH7jJeLbAMBUs",
    authDomain: "react-monsta.firebaseapp.com",
    databaseURL: "https://react-monsta.firebaseio.com",
    projectId: "react-monsta",
    storageBucket: "react-monsta.appspot.com",
    messagingSenderId: "98310463664"
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
