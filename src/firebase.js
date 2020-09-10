import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA2VEDn6RzZ1WY4_icPZrQbIx6Y9Y5hp3Y',
  authDomain: 'facebook-messenger-clone-5d716.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-clone-5d716.firebaseio.com',
  projectId: 'facebook-messenger-clone-5d716',
  storageBucket: 'facebook-messenger-clone-5d716.appspot.com',
  messagingSenderId: '885121178558',
  appId: '1:885121178558:web:2d7de09520ceeb00c4f7ef',
});

const db = firebaseApp.firestore();

export default db;
