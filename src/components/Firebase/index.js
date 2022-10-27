import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, child, get } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBYyUjGidas0ad5xUW1ndrbE5zjrzJ14GA",
    authDomain: "my-pro-608d4.firebaseapp.com",
    databaseURL: "https://my-pro-608d4-default-rtdb.firebaseio.com",
    projectId: "my-pro-608d4",
    storageBucket: "my-pro-608d4.appspot.com",
    messagingSenderId: "691755445693",
    appId: "1:691755445693:web:eccec8d80edff2764336d4",
    measurementId: "G-TPCTFMPC38"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export default function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl
  })
}

const dbRef = ref(getDatabase())
get(child(dbRef, `users/${1}`))
  .then(snapshot => {

    if(snapshot.exists()) console.log(snapshot.val())
    else console.log('No data available')

  })
  .catch(err => console.log(err))