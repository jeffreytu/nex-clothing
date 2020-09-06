import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqzZn6WfUcyQAV_fsiAQqt_CcfrcNkryo",
    authDomain: "nex-clothing.firebaseapp.com",
    databaseURL: "https://nex-clothing.firebaseio.com",
    projectId: "nex-clothing",
    storageBucket: "nex-clothing.appspot.com",
    messagingSenderId: "956785355246",
    appId: "1:956785355246:web:c2e36379223ca74b4146ff"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;