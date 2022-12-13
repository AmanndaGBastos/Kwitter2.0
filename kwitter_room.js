const firebaseConfig = {
  apiKey: "AIzaSyCjiBgOtKHfpcrs7aXz7K8AKjLzSf_2UU4",
  authDomain: "marybest-ce1f8.firebaseapp.com",
  databaseURL: "https://marybest-ce1f8-default-rtdb.firebaseio.com",
  projectId: "marybest-ce1f8",
  storageBucket: "marybest-ce1f8.appspot.com",
  messagingSenderId: "54875675224",
  appId: "1:54875675224:web:624760b7610fdfcd84482d"
  
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

p
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey; //child=pasta
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}