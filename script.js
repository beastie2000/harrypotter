// Olivia's JS for getting a random character
console.log(document.getElementById("random-character-button"));
document.getElementById("random-character-button").addEventListener("click", function(event) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  const url = "http://hp-api.herokuapp.com/api/characters";
  var htmlString = "";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let randPerson = json[getRandomInt(113)];


      // <h1> element is different based on house
      htmlString += "<h1 ";
      if (randPerson.house === "Slytherin") {
        htmlString += "id='slyth'";
      } else if (randPerson.house === "Hufflepuff") {
        htmlString += "id='huffl'";
      } else if (randPerson.house === "Ravenclaw") {
        htmlString += "id='raven'";
      } else if (randPerson.house === "Gryffindor") {
        htmlString += "id='gryff'";
      }


      htmlString += (">" + randPerson.name + "</h1>");

  //    htmlString +=("<h1>"+randPerson.name+"</h1>");

      if (randPerson.image) {
        htmlString += ("<img src='" + randPerson.image +  "' width='200'>");
      }

      htmlString += ("<p>" + capitalize(randPerson.gender));
      if (randPerson.species !== "human") {
        htmlString += (" " + randPerson.species);
      } else if (randPerson.hogwartsStudent) {
        htmlString += " Hogwarts Student</p>";
      } else if (randPerson.hogwartsStaff) {
        htmlString += " Hogwarts Staff</p>";
      } else if (randPerson.wizard) {
        htmlString += " Wizard</p>";
      } else if (randPerson.ancestry === "squib") {
        htmlString += " Squib</p>";
      }

      htmlString += ("<p>" + randPerson.house + "</p>");
      if (randPerson.wand.length) {
        let wand = "";
        wand += ("<p>" + randPerson.wand.length + " inch " + randPerson.wand.wood
                + " wand with a " + randPerson.wand.core + " core</p>");
        htmlString += wand;
      }
      if (randPerson.patronus) {
        htmlString += ("<p>Patronus: " + randPerson.patronus + "</p>");
      }
      if (randPerson.dateOfBirth) {
        htmlString += ("<p>Birthday: " + randPerson.dateOfBirth + "</p>");
      }
      if (randPerson.actor) {
        htmlString += ("<p>Played by " + randPerson.actor);
      }



      document.getElementById("character-info").innerHTML = htmlString;
      });
});


