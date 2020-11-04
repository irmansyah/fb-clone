import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAa0acUdnWG_RaM30vchZOGmgFGdixYuSA",
  authDomain: "fb-clone-5ca03.firebaseapp.com",
  databaseURL: "https://fb-clone-5ca03.firebaseio.com",
  projectId: "fb-clone-5ca03",
  storageBucket: "fb-clone-5ca03.appspot.com",
  messagingSenderId: "452384311154",
  appId: "1:452384311154:web:fc0edf59bd37b95147bfeb",
  measurementId: "G-Y3F73DGLJB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;