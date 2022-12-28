  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase, ref, set, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBi3VK63m0DdFC1VhgtrdJzRmGflrlOej4",
    authDomain: "javascript10-f88b3.firebaseapp.com",
    databaseURL: "https://javascript10-f88b3-default-rtdb.firebaseio.com",
    projectId: "javascript10-f88b3",
    storageBucket: "javascript10-f88b3.appspot.com",
    messagingSenderId: "744739698761",
    appId: "1:744739698761:web:9ab7c3e6e2443819dc2798",
    measurementId: "G-M26NSY6NDZ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var  a= document.getElementById("task");
// var titleinp = document.getElementById("title");
// var parent = document.getElementById("parent");

window.savetask = function () {
    var obj = {
        task: a.value,
        // title: titleinp.value,
    };


    obj.id = Math.random().toString().slice(2);
    console.log(obj.id);

    let refrence = ref(database, `tasks/${obj.id}/`);
    set(refrence, obj);
    console.log(obj);
};
function getData() {
    let refrence = ref(database, "tasks/");
    let arr = [];
    onChildAdded(refrence, function (data) {
        arr.push(data.val());
    })

    onValue(refrence, function (data) {
        console.log(data.val());
    });
}
getData();
