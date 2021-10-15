// Maura's JS for getting list of characters

document.getElementById("houseSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("houseInput").value;
      if (value === "") 
        return;
      if (value === "Gryffindor" || value === "Slytherin" || value === "Hufflepuff" || value === "Ravenclaw" || value === "gryffindor" || value === "slytherin" || value === "hufflepuff" || value === "ravenclaw") {
        console.log("valid house");
      }
      else {
        alert("Please type a valid hogwarts house");
        return;
      }

      const url = "http://hp-api.herokuapp.com/api/characters/house/" + value;
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          let results = "";
          for (let i = 0; i < json.length; i++) {
              results += "<div id='profile'> <div id='nameandpic'> <h1 ";
              if (json[i].house === "Slytherin") {
                results += "id='slyth'";
              } else if (json[i].house === "Ravenclaw") {
                results += "id='raven'";
              } else if (json[i].house === "Gryffindor") {
                results += "id='gryff'";
              } else if (json[i].house === "Hufflepuff") {
                results += "id='huffl'";
              } 
              results += ">" + json[i].name + "<hr></h1>";
              results += "<img src='" + json[i].image + "' width='200'> </div><br>";
              results += "<div id='information'";
              if (json[i].species !== "human") {
                results += "<p>" + json[i].species + "<br><br>";
              }
              else if (json[i].hogwartsStudent) {
                if (json[i].gender === "male") {
                  results += "<p>Male ";
                }
                if (json[i].gender === "female") {
                  results += "<p>Female ";
                }
                results += " Hogwarts Student<br><br>";
              }
              else if (json[i].hogwartsStaff) {
                if (json[i].gender === "male") {
                  results += "<p>Male ";
                }
                if (json[i].gender === "female") {
                  results += "<p>Female ";
                }
                results += " Hogwarts Staff<br><br>"
              }
              else if (json[i].wizard) {
                if (json[i].gender === "male") {
                  results += "<p>Male ";
                }
                if (json[i].gender === "female") {
                  results += "<p>Female ";
                }
                results += " Wizard<br>";
              }
              else if (json[i].ancestry === "squib") {
                results += "<p>" + json[i].gender + " Squib<br><br>";
              }
              if (json[i].wand.length !== "") {
                results += "Wand: " + json[i].wand.length + " inch " + json[i].wand.wood + " wand with a " + json[i].wand.core + " core<br><br>";
              }
              if (json[i].patronus !== "") {
                results += "Patronus: " + json[i].patronus + "<br><br>";
              }
              if (json[i].dateOfBirth !== "") {
                results += "Birthday: " + json[i].dateOfBirth + "<br><br>";
              }
              if (json[i].actor !== "") {
                results += "Played by " + json[i].actor;
              }
              results += "</p></div></div>";
          }
          //results += "</p>";
          document.getElementById("houseResults").innerHTML = results;
        });
  
  
  
  });