import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.API_KEY,
    authDomain:  process.env.AUTH_DOMAIN,
    databaseURL:process.env.DATABASE_URL ,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSASING_SENDER_ID,
    appId: process.env.APP_ID
};

firebase.initializeApp(config);
export const {auth} = firebase;
export const storage = firebase.storage();
export const database = firebase.database();
export const provider = new firebase.auth.FacebookAuthProvider();