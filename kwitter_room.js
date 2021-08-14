
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDCl4N2-jmpsJdd944ImGYNCVYtObhkpV4",
      authDomain: "chatter-f4a1a.firebaseapp.com",
      databaseURL: "https://chatter-f4a1a-default-rtdb.firebaseio.com",
      projectId: "chatter-f4a1a",
      storageBucket: "chatter-f4a1a.appspot.com",
      messagingSenderId: "596572576546",
      appId: "1:596572576546:web:4f0cea99f4628dc8f6637b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
