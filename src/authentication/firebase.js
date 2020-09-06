import * as firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA51FIPZWuzUsQyF6O_sNy6bklhdMhmzk4",
    authDomain: "react-redux-todo-cd6f7.firebaseapp.com",
    databaseURL: "https://react-redux-todo-cd6f7.firebaseio.com",
    projectId: "react-redux-todo-cd6f7",
    storageBucket: "react-redux-todo-cd6f7.appspot.com",
    messagingSenderId: "272879222857",
    appId: "1:272879222857:web:bec3e9c3d614c74b867f98",
    measurementId: "G-R6T4Z8X1D1"
})

export default app