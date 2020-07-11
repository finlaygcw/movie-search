const result = document.querySelector(".result");
const button = document.querySelector(".submitButton");
const search = document.querySelector(".searchbar");

let movieName;
let movieDirector;
let plot;
let rating;
let image;
let imdb;
let rottenTomatoes;
let metacritic;
let actors;

const apiKey = "c432dbd8";

button.addEventListener("click", function (name) {
  fetch("http://www.omdbapi.com/?t=" + search.value + "&apikey=" + apiKey)
    .then((response) => response.json())
    .then((data) => {
      movieName = data["Title"];
      movieDirector = data["Director"];
      image = data["Poster"];
      plot = data["Plot"];
      actors = data["Actors"];
      imdb = data["Ratings"][0]["Source"] + ": " + data["Ratings"][0]["Value"];
      rottenTomatoes =
        data["Ratings"][1]["Source"] + ": " + data["Ratings"][1]["Value"];
      metacritic =
        data["Ratings"][2]["Source"] + ": " + data["Ratings"][2]["Value"];

      result.innerHTML = `
        
        <h1 class="float" >${movieName}</h1>
        <h4 class="float" >Directed by: ${movieDirector}</h4>
        <br/>
        <img class="image" src="${image}" width="200px" height="300px" />
        <br/>
        <span class="underlined text">Actors:</span>
        <span class="text">${actors}</span>
        <br/>
        <span class="underlined text">Plot:</span>
        <span class="float text">${plot}</span>
        <br/>
        <span class="underlined text">Ratings:</span>
        <span class="text">&bull;${imdb}</span>
        <span class="text">&bull;${rottenTomatoes}</span>
        <span class="text">&bull;${metacritic}</span>
    `;
    })
    .catch((err) =>
      alert(
        "Error getting data. Please make sure your movie name is spelled correctly."
      )
    );
});
