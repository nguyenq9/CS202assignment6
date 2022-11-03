// function setup() { 
//   loadJSON("http://api.open-notify.org/astros.json", dataReceived);
// }


var number;
var names = [];
var craft = [];

// function dataReceived(data) {
//   number = data.number
//   console.log("number" + number)
//   for (let i = 0; i < data.people.length; i++) {
//     names[i] = data.people[i].name
//     craft[i] = data.people[i].craft
//   }
//   console.log(names)
//   console.log(craft)
// }

$(document).ready(function(){
  $.getJSON("http://api.open-notify.org/astros.json", function( data ) {
    number = data['number'];
    for (let i = 0; i < data.people.length; i++) {
      names[i] = data['people'][i]['name']
      craft[i] = data['people'][i]['craft']
    }
  });
});

function createAstronaut(i) {
  var x = document.createElement("IMG");
  x.setAttribute("src", "astro.png");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "Astronaut");
  x.setAttribute("onclick", "teehee("+i+")");
  if (i%2 == 1) {
    x.setAttribute("id", "clockwise");
  } else {
    x.setAttribute("id", "counterclockwise");
  }
  document.body.appendChild(x);
}

function hehe() {
  var elem = document.getElementById('btn');
  elem.parentNode.removeChild(elem);
  for (let i = 0; i < number; i++) {
    createAstronaut(i)
  }
}

function teehee(i) {
  swal("Name: " + names[i] + "\nCraft: " + craft[i], {
    buttons: {
      cancel: "Close",
      open: {
        text: "Search",
        value: "open",
      },
    },
  })
  .then((value) => {
    switch (value) {
      case "open":
        window.open("https://www.google.co.in/search?q=" + names[i] + " astronaut");
        break;
      default:
    }
  });
}
