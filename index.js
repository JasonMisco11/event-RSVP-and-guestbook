// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {} from 'firebase/auth';
import { getAuth, EmailAuthProvider } from 'firebase/auth';

import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: 'AIzaSyDZBuAhfFP6WQvsBJhVuzTRZRytcccgOA0',
    authDomain: 'fir-web-codelab-ec2b4.firebaseapp.com',
    projectId: 'fir-web-codelab-ec2b4',
    storageBucket: 'fir-web-codelab-ec2b4.appspot.com',
    messagingSenderId: '11724241384',
    appId: '1:11724241384:web:d930ea04ad666c04e84c5d',
    measurementId: 'G-BT43ZHSVL4',
  };

  // initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  auth = getAuth();
  //const analytics = getAnalytics(app);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
  const ui = new firebaseui.auth.AuthUI(auth);

  startRsvpButton.addEventListener("click",
   () => {
        ui.start("#firebaseui-auth-container", uiConfig);
  });
}
main();
