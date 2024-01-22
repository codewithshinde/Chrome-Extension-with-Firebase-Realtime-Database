# Chrome Extension with Firebase Realtime Database

This sample code demonstrates the connection between a Chrome extension and Firebase Realtime Database. Follow the steps below to set up and connect your extension.

## Step 1: Create a Realtime Database in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. In the left sidebar, click on "Database" and choose "Create Database".
4. Choose "Start in test mode" for security rules.
5. Get the configuration keys for your Firebase project:
   - `apiKey`
   - `authDomain`
   - `databaseURL`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

## Step 2: Set Up Chrome Extension

1. Open `popup.js` in your Chrome extension project.
2. Replace the placeholders with your Firebase configuration keys:

   ```javascript
   const config = {
     apiKey: "<YOUR_API_KEY>",
     authDomain: "<YOUR_AUTH_DOMAIN>",
     databaseURL: "<YOUR_DATABASE_URL>",
     projectId: "<YOUR_PROJECT_ID>",
     storageBucket: "<YOUR_STORAGE_BUCKET>",
     messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
     appId: "<YOUR_APP_ID>"
   };


Locate window.onload and replace <YOUR_DB_REFERENCE> with the reference to your Realtime Database.
## Step 3: Load Firebase Script

1. Load the Firebase script in your `popup.js` file:

   ```javascript
   window.onload = function () {
     $.loadScript('https://www.gstatic.com/firebasejs/6.5.0/firebase.js', initializeFirebase);
   };
   
## Step 4: Initialize Firebase and Connect with Realtime Database

1. Add the following code to your `popup.js` file:

   ```javascript
   function initializeFirebase() {
     firebase.initializeApp(config);

     // Replace `<YOUR_DB_REFERENCE>` with the reference to your Realtime Database
     const itemsRef = firebase.database().ref("<YOUR_DB_REFERENCE>");

     // Listen for changes in the database
     itemsRef.on("value", snapshot => {
       const items = snapshot.val();
       console.log(items);
       // Perform actions with the retrieved data
     });
   }
Replace <YOUR_DB_REFERENCE> and other placeholders with your actual values.

## Step 5: Load Your Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" in the top right corner.
3. Click on "Load unpacked" and select the folder containing your extension files.

## Step 6: Test Your Extension

1. Open your extension by clicking its icon in the Chrome toolbar.
2. Open the Chrome DevTools (right-click on the extension icon -> "Inspect").
3. Check the console for Firebase data retrieved from the Realtime Database.

Here you go! Your Chrome extension is now connected with Firebase Realtime Database.
