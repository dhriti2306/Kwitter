var firebaseConfig = {
    apiKey: "AIzaSyB_JyJo5fvVj1cAXiw-SU-juyjdqxgtNPE",
    authDomain: "class-test-a35a9.firebaseapp.com",
    projectId: "class-test-a35a9",
    storageBucket: "class-test-a35a9.appspot.com",
    messagingSenderId: "49670287972",
    appId: "1:49670287972:web:0cf4bd372631f9a95aa571"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      
      });});}
getData();
