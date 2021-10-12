var firebaseConfig = {
  apiKey: "AIzaSyCR2e1o50nA7ie-vVCxCnrXnY0NQDB3mJ4",
  authDomain: "ice--cream-social.firebaseapp.com",
  projectId: "ice--cream-social",
  storageBucket: "ice--cream-social.appspot.com",
  messagingSenderId: "975098434701",
  appId: "1:975098434701:web:12607f14ae97ea78273ec4"
};

firebase.initializeApp(firebaseConfig);
function addUser(){
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      bhavya:"adding user"
  });
}


function logout(){
  window.location="index.html";
}
