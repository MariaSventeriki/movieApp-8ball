function topMoviesReceiver() {
    document.querySelector('#topMovies').innerHTML = '';
    async function topMoviesDataHandler(data) {
        let result = await data.json();
        console.log(result);
        for (let i = 0; i < 3; i++) {
            let movieId = result[i];
            //"/title/tt5034838/"
            movieId = movieId.slice(7,16);
            console.log(movieId);
            await fetch('https://imdb8.p.rapidapi.com/title/auto-complete?q=' + movieId, options).then(async function (newData) {
                let movie = await newData.json();
                console.log(movie);
                let img='';
                if(movie.d[0].i!=undefined) {
                    img = movie.d[0].i.imageUrl;
                }
                let card = `
            <div class="topMovies">
                <img src = "${img}"
            </div>
            `
                document.querySelector('#topMovies').insertAdjacentHTML('beforeend', card);
            })

            //<a href = "${movie.d.imageUrl}"> </a> //from line 13

        }
    }

    function errorHandler(err) {
        console.log(err);
    }

    let url = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US"' + document.getElementById('search').value;
    let options = {
        'method': 'GET',
        'headers': {
            'x-rapidapi-key': "266ac965d8msh44dd7254846aec3p1e4203jsn151311bd61e0",
            'x-rapidapi-host': "imdb8.p.rapidapi.com"
        }
    };

    fetch(url, options).then(topMoviesDataHandler).catch(errorHandler);
}

export default topMoviesReceiver;