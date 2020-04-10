import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBVjZ1zWzWnSb9h4i0_xGc-8RVGsfF0lc8",
    authDomain: "twifo-337e4.firebaseapp.com",
    databaseURL: "https://twifo-337e4.firebaseio.com",
    projectId: "twifo-337e4",
    storageBucket: "twifo-337e4.appspot.com",
    messagingSenderId: "527791803534",
    appId: "1:527791803534:web:c0de7e116e2860a05e8ddf",
    measurementId: "G-TGMMPY9G8W"

})

const database = firebaseApp.firestore()

export default database