import dataReceiver from "./Components/dataReceiver.js";

import topMoviesReceiver from "./Components/topMovies.js"
topMoviesReceiver();

import resetButton from "./Components/resetButton.js"


let urlSearch = 'https://imdb8.p.rapidapi.com/title/auto-complete?q='+document.getElementById('search').value;

let urlTopMovies = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US'
let options = {
    'method':'GET',
    'headers': {
        'x-rapidapi-key': "ad560d2758mshea3a392b9b06bb4p1dd47fjsnfd9c3537b79f",
        'x-rapidapi-host': "imdb8.p.rapidapi.com"
    }
};
//dataReceiver(urlTopMovies,options);
document.getElementById("centerDiv").addEventListener("click", function(){dataReceiver(urlSearch,options)});

document.getElementById("reset").addEventListener("click", function(){resetButton()});
