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
              results += ">" + json[i].name + "</h1>";
              results += "<img src='" + json[i].image + "' width='200'> </div><br>";
              results += "<div id='information'";
              if (json[i].species !== "human") {
                results += "<p>" + json[i].species + "</p><br>";
              }
              else if (json[i].hogwartsStudent) {
                results += "<p>" + json[i].gender + " Hogwarts Student</p><br>";
              }
              else if (json[i].hogwartsStaff) {
                results += "<p>" + json[i].gender + " Hogwarts Staff</p><br>"
              }
              else if (json[i].wizard) {
                results += "<p>" + json[i].gender + " Wizard</p><br>";
              }
              else if (json[i].ancestry === "squib") {
                results += "<p>" + json[i].gender + " Squib</p><br>";
              }

              results += "<p>" + json[i].wand.length + " inch " + json[i].wand.wood + " wand with a " + json[i].wand.core + " core</p><br>";
              results += "<p>Patronus: " + json[i].patronus + "<br></p>";
              results += "<p>Birthday: " + json[i].dateOfBirth + "</p><br>";
              results += "<p>Played by " + json[i].actor + "</p></div></div>";
          }
          results += "</p>";
          document.getElementById("houseResults").innerHTML = results;
        });
  
  
  
  });