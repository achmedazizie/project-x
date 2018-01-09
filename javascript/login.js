// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOdwAyeMpg18S2XNOn0ZAviBc64Nn2URM",
  authDomain: "project-x-v1987.firebaseapp.com",
  databaseURL: "https://project-x-v1987.firebaseio.com",
  projectId: "project-x-v1987",
  storageBucket: "project-x-v1987.appspot.com",
  messagingSenderId: "702237693841"
};
firebase.initializeApp(config);

//Sign Up, Log In & Sign Out control element
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogOut = document.getElementById('btnLogOut');

function signup(){
  var email = txtEmail.value;
  var pass = txtPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById('statusDisplay').innerHTML = errorMessage;
  });
}

function login(){
  var email = txtEmail.value;
  var pass = txtPassword.value;
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById('statusDisplay').innerHTML = errorMessage;
  });
}

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    window.location = 'index.html';
  }
  else{
    console.log('not logged in');
  }
});
