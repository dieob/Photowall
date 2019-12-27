import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBvQCp5-ANVEdfyEbtKYSgxkR4Uw5olyIo",
    authDomain: "photowall-dd25b.firebaseapp.com",
    databaseURL: "https://photowall-dd25b.firebaseio.com",
    projectId: "photowall-dd25b",
    storageBucket: "photowall-dd25b.appspot.com",
    messagingSenderId: "661287077550",
    appId: "1:661287077550:web:b9412d3d742683721f8f3f",
    measurementId: "G-7D6GTGRQGE"
  }

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}