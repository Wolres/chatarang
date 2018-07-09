import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}

const app = firebase.initializeApp(config)

//configure authentication
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

//configure database
const db = firebase.database(app)
const base = Rebase.createClass(db)

export default base