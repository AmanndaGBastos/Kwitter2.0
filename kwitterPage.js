//LINKS FIREBASE
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
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

    function send(){
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });//push:empurra
        document.getElementById("msg").value = "";//limpando canto

    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId)
console.log(messageData)
name = message_data['name'];
 message = message_data['message'];
 like = message_data['like'];
  name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
   like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row = name_with_tag + message_with_tag +like_button + span_with_tag;
  document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();
function updateLike(message_id) { console.log("clicked on like button - " + message_id);
 button_id = message_id;
  likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1; 
   console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
      }