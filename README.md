# Chrome-Extension-with-Firebase-Realtime-Database
Sample code for connection between your chrome extension and Firebase Real time database.

STEP 1:
Create a Realtime database in your Firebase <br>
Get all these keys<br>
  apiKey: "",<br>
  authDomain: "",<br>
  databaseURL: "",<br>
  projectId: "",<br>
  storageBucket: "",<br>
  messagingSenderId: "",<br>
  appId: ""<br>
  
 <b>NOTE</b>: Give some values in realtime db to retrieve
 
  <projectId>
        
 Step 2:<br>
 Go to popup.js and give these keys in that file.<br>
 
 Then go to window.onload<br>
 
   window.onload = function(){<br>
    $.loadScript('https://www.gstatic.com/firebasejs/6.5.0/firebase.js', function(){<br>
      firebase.initializeApp(config);<br>
      const itemsRef = firebase.database().ref("<b>GIVE YOUR DB REFERENCE CREATED</b>");<br>
      itemsRef.on("value", snapshot => {<br>
        var items = snapshot.val();<br>
        console.log();<br>
        });<br>
      });<br>
  }<br>
 
 Load the package in Chrome<br>
 <b>HERE YOU GO YOU CHROME EXTENSION IS CONNECTED WITH FIREBASE </b>
 <br>
