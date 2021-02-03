importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBydLR8q_GU3w_8dtcaCQ2YguQjoU6XHB8",
    authDomain: "angular-pwa-4bcb8.firebaseapp.com",
    projectId: "angular-pwa-4bcb8",
    storageBucket: "angular-pwa-4bcb8.appspot.com",
    messagingSenderId: "389981027214",
    appId: "1:389981027214:web:0b08693baae5130f6542df",
    measurementId: "G-HR27MPS7X4"
});
const messaging = firebase.messaging();