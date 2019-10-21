'use strict';

let changeColor = document.getElementById('changeColor');
let changeColor2 = document.getElementById('changeColor2');

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

changeColor2.onclick = function(element) {
  chrome.storage.sync.set({'color': '#fffff'}, function() {
    console.log('WHITE IS SET');
  });
  changeColor.innerHTML = "WHITE";

};

  changeColor3.onclick = function(element) {
    chrome.storage.sync.set({'color': '#ff0000'}, function() {
      console.log('RED IS SET');
    });
    changeColor.innerHTML = "RED";
  };


  // THIS IS THE ACTUAL CODE TO CONNECT FIRE BASE
  // IGNORE OTHER CODE COPY CONFIG KEYS AND THE BELOW CODE TO GET IT CONNECTED
  window.onload = function(){
    $.loadScript('https://www.gstatic.com/firebasejs/6.5.0/firebase.js', function(){
      changeColor.innerHTML = "ONLOAD";
      firebase.initializeApp(config);
      const itemsRef = firebase.database().ref("Name/");
      itemsRef.on("value", snapshot => {
          let AllMatches = snapshot.val();
          console.log(AllMatches);
      });

    });
  }
