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

//Push to firebase database
var menu = document.getElementById("menu");
var restaurant = document.getElementById("restaurantname");
var price = document.getElementById("price");
var zone = document.getElementById("zone");
var submitButton = document.getElementById("submitButton");
var resetButton = document.getElementById("resetButton");

function submitData(){
var menuList = menu.value;
var restaurantList = restaurant.value;
var priceList = price.value;
var zoneList = zone.value;
var firebaseRef = firebase.database().ref().child(zoneList).push({
  menuList,
  restaurantList,
  priceList,
});
}

function resetData(){
  form.reset;
}

function logout(){
  firebase.auth().signOut().then(function(){
    window.location = 'login.html';
  }).catch(function(error){

  });
}
