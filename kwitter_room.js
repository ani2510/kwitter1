var firebaseConfig = {
    apiKey: "AIzaSyBz-TTbs5zWgecb2shEhMeUZ1LkrbeFFg4",
    authDomain: "letschatwebapp-94c96.firebaseapp.com",
    databaseURL: "https://letschatwebapp-94c96-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-94c96",
    storageBucket: "letschatwebapp-94c96.appspot.com",
    messagingSenderId: "714665753558",
    appId: "1:714665753558:web:7b23c8ed68b8547d958277",
    measurementId: "G-B49V0Y3DM0"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
             });
             localStorage.setItem("room_name", room_name);
             window.location = "kwitter_page.html";
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
       });});}
 
 getData();
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
 }
 