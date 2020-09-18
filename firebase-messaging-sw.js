console.log('');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'api-key',
  apiKey: "AIzaSyA_qYrnKRfxXYB8-rkqi4jbtcFXkYUrDeA",
  authDomain: "tactopus-website.firebaseapp.com",
  databaseURL: "https://tactopus-website.firebaseio.com",
  projectId: "tactopus-website",
  storageBucket: "tactopus-website.appspot.com",
  messagingSenderId: "956620709783",
  appId: "1:956620709783:web:fc0594c4209da7d606aed2",
  measurementId: "G-ZJ51KSHGCB"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BLVSjbQ9QkGYRxvTR7W14VXG1QB7V0NbJD044h9fbtneO6ze-1FP7JAOmKHaucXI1zx4KOhAjF_04QsiRz8om5k');

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });

