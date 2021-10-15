// Olivia's JS for getting a random character
console.log(document.getElementById("random-character-button"));
document.getElementById("random-character-button").addEventListener("click", function(event) {
  console.log("Clicked!");

  const url = "http://hp-api.herokuapp.com/api/characters";
  console.log(url);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      console.log(json.length);
    //  document.getElementById("testing-button").innerHTML = "modified document";
      });
});


