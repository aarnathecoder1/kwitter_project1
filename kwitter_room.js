
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyD_ua-puPe9UVU-GZYnBJI3e-d1HpT8bOk",
      authDomain: "kwitter-81d3b.firebaseapp.com",
      databaseURL: "https://kwitter-81d3b-default-rtdb.firebaseio.com",
      projectId: "kwitter-81d3b",
      storageBucket: "kwitter-81d3b.appspot.com",
      messagingSenderId: "110047476839",
      appId: "1:110047476839:web:4e11ed0cf4c6b0da41e8c2",
      measurementId: "G-D3KTS7Z69Z"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function add_room() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" + onclick = 'redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
} 
