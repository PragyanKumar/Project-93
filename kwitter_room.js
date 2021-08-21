
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
    
    //Username//
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!"
    
    //add room //
    function addRoom(){
            room_name=document.getElementById("room_name").value 
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            })
            localStorage.setItem("room_name",room_name)
            window.location="kwitter_page.html"
    }

    //Get data//
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room_name-" + Room_names)
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML += row
      
      });});}
getData();

//Redirect to room name//
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}