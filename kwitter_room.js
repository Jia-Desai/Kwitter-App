
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDFxOWJj_SzAbymytC6aV0i05JW3hl9j30",
      authDomain: "kwitter-app-70b80.firebaseapp.com",
      projectId: "kwitter-app-70b80",
      storageBucket: "kwitter-app-70b80.appspot.com",
      messagingSenderId: "976341497527",
      appId: "1:976341497527:web:5ce77aba43c7119786bf32"
    };
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id= "+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
