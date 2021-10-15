// Maura's JS for getting list of characters

document.getElementById("houseSubmit").addEventListener("click", function(event) {
    console.log("clicked");
    event.preventDefault();
    const value = document.getElementById("houseInput").value;
      if (value === "") 
        return;
      console.log(value);
      const url = "http://hp-api.herokuapp.com/api/characters/house/" + value;
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          let results = "";
          for (let i = 0; i < json.length; i++) {
              results += "<p>" + json[i].name;
              results += "<p>" + json[i].image;
              results += "<p>" + json[i].actor;
              results += "<p>" + json[i].dateOfBirth;
              results += "<p>" + json[i].patronus;
              results += "<p>" + json[i].species;
              results += "<p>" + json[i].dateOfBirth;
              results += "<p>" + json[i].dateOfBirth;
              results += "<p>" + json[i].wand.core;
              results += "<p>" + json[i].wand.wood;
          }
          results += "</p>";
          document.getElementById("houseResults").innerHTML = results;
        });
  
  
  
  });