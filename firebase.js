const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
var nameV, rollV;
var array = ["Java", "HTML"];

function ready() {
  nameV = document.getElementById("namebox").value;
  rollV = document.getElementById("rollbox").value;
}

function pull() {
  var i = firebase.database().ref("applicant");
  i.once("value", function (snapshot) {
    var data = snapshot.val();
    for (let i in data) {
      console.log(data[i]);
    }
  });
}

function join() {
  var i = firebase.database().ref("applicant");
}

function set() {
  ready();
  firebase
    .database()
    .ref("applicant/" + nameV)
    .set({
      Name: nameV,
      roll: rollV,
      tags: array,
    });
  console.log("Success");
}

document.getElementById("insert").onclick = function () {
  set();
};

document.getElementById("pull").onclick = function () {
  pull();
};
