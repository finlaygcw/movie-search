const results = document.querySelector(".result");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const apiKey = "3944fb2e";

let movieName;
let movieDirector;
let plot;
let rating;
let image;
let imdb;
let rottenTomatoes;
let metacritic;
let actors;

button.addEventListener("click", getMovieInfo);

async function getMovieInfo() {
  results.innerHTML = "";
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t=" + input.value + "&apikey=" + apiKey
  );
  const json = await response.json();
  console.log(json);
  movieName = json.Title;
  movieDirector = json.Director;
  image = json.Poster;
  plot = json.Plot;
  actors = json.Actors;
  imdb = json["Ratings"][0]["Source"] + ": " + json["Ratings"][0]["Value"];
  rottenTomatoes =
    json["Ratings"][1]["Source"] + ": " + json["Ratings"][1]["Value"];
  metacritic =
    json["Ratings"][2]["Source"] + ": " + json["Ratings"][2]["Value"];

  const columnElement = document.createElement("div");
  columnElement.classList.add("column");
  results.appendChild(columnElement);

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  columnElement.appendChild(cardElement);

  const cardImageElement = document.createElement("div");
  cardImageElement.classList.add("card-image");
  cardElement.appendChild(cardImageElement);

  const cardContentElement = document.createElement("div");
  cardContentElement.classList.add("card-content");
  cardElement.appendChild(cardContentElement);

  const figureElement = document.createElement("figure");
  figureElement.classList.add("image");
  cardImageElement.appendChild(figureElement);

  const imageElement = document.createElement("img");
  imageElement.src = image;
  figureElement.appendChild(imageElement);

  const mediaElement = document.createElement("div");
  mediaElement.classList.add("media");
  cardContentElement.appendChild(mediaElement);

  const mediaContentElement = document.createElement("div");
  mediaContentElement.classList.add("media-content");
  mediaElement.appendChild(mediaContentElement);

  const titleElement = document.createElement("p");
  titleElement.classList.add("title");
  titleElement.classList.add("is-4");
  titleElement.innerHTML = movieName;
  mediaContentElement.appendChild(titleElement);

  const directorElement = document.createElement("p");
  directorElement.classList.add("subtitle");
  directorElement.classList.add("is-6");
  directorElement.innerHTML = movieDirector;
  mediaContentElement.appendChild(directorElement);

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  cardContentElement.appendChild(contentElement);

  const plotElement = document.createElement("p");
  plotElement.classList.add("subtitle");
  plotElement.classList.add("is-5");
  plotElement.innerHTML = "Plot";
  contentElement.appendChild(plotElement);

  const plotTextElement = document.createElement("p");
  plotTextElement.classList.add("plotText");
  plotTextElement.innerHTML = plot;
  contentElement.appendChild(plotTextElement);

  const actorsElement = document.createElement("p");
  actorsElement.classList.add("subtitle");
  actorsElement.classList.add("is-5");
  actorsElement.innerHTML = "Actors";
  contentElement.appendChild(actorsElement);

  const actorsText = document.createElement("p");
  actorsText.classList.add("actorsText");
  actorsText.innerHTML = actors;
  contentElement.appendChild(actorsText);
}
