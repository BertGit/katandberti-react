import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBadmk35qRg3bwn2uBFteS7SQoKRCKTUgc",
    authDomain: "katandberti.firebaseapp.com",
    databaseURL: "https://katandberti.firebaseio.com",
    projectId: "katandberti",
    storageBucket: "katandberti.appspot.com",
    messagingSenderId: "952774658924"
}
firebase.initializeApp(config)
export default firebase