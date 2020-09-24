import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDivSVZIh6Bn1ZZZuMkhUkaxTEFJWBuaWg",
    authDomain: "covid-19-b81d2.firebaseapp.com",
    databaseURL: "https://covid-19-b81d2.firebaseio.com",
    projectId: "covid-19-b81d2",
    storageBucket: "covid-19-b81d2.appspot.com",
    messagingSenderId: "560056364366",
    appId: "1:560056364366:web:b0d04db57ecc781be9421f",
    measurementId: "G-43TW6CPMLC"
  };
 
 

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };