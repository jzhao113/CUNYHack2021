const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
var nameV, rollV;
var array = ["HTML","CSS"];

function ready() {
  nameV = document.getElementById("namebox").value;
  rollV = document.getElementById("rollbox").value;
}

function pull(user) {

  var userTags = [];
  var output = []

  //finding user and their tags
  firebase.database().ref().child('applicant').orderByChild('Name').equalTo(user).once("child_added", function(snapshot)
  {
    userTags = snapshot.val().tags
  }).then(function(value)
  {
    var count = 0
    firebase.database().ref("jobs").once("value", function(snapshot)
    {
      var data = snapshot.val();
      for(let i in data)
      {
        var counter = 0, flag = false;
        for(let j in userTags)
        {
          if(data[i].tags.includes(userTags[j]))
          {
            counter++;
            flag=true;
          }
        }

        if(flag)
        {
          output.push({Data:data[i], counter:counter})
        }

      }
    }).then(function(value){
      output.sort((a,b) => (b.counter - a.counter))
      console.log(output)
    })
  })


}

function set(table, data) {
  ready();
  firebase
    .database()
    .ref(table)
    .push(data);
  console.log("Success");
}

document.getElementById("insert").onclick = function () {
  ready();
  var x = {
    Name: nameV,
    roll: rollV,
    tags: array,
  }
  set("applicant/", x);
};

document.getElementById("pull").onclick = function () {
  pull("Jake Paul");
};

document.getElementById("listing").onclick = function () {
  ready();
  var x = {
    Name: nameV,
    roll: rollV,
    tags: array,
  }
  set("jobs/", x);
};
