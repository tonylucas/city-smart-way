import { AngularFireModule } from 'angularfire2';

const firebase = {
  apiKey: 'AIzaSyDEpvqq_4FwTB2VBBqdYFK2y4uge0T0Txg',
  authDomain: 'city-smart-way.firebaseapp.com',
  databaseURL: 'https://city-smart-way.firebaseio.com',
  storageBucket: 'city-smart-way.appspot.com',
  messagingSenderId: '116650528913'
};

export const FirebaseConfig = AngularFireModule.initializeApp(firebase);