let input = document.getElementById('search');
let btn = document.getElementById('searchBtn');
let error = document.getElementById('error');
let title = document.getElementById('title');
let year = document.getElementById('year');
let type = document.getElementById('type');
let genre = document.getElementById('genre');
let rating = document.getElementById('imdbRating');
let image = document.getElementById('image');
let plot = document.getElementById('plot');
let ageRate = document.getElementById('ageRate');
let relDate = document.getElementById('relDate');
let runTime = document.getElementById('runtime');
let dir = document.getElementById('Director');
let actors = document.getElementById('actors');
let awards = document.getElementById('awards');
let box = document.getElementById('box');
let reset = document.getElementById('reset');
let container = document.getElementById('container');

btn.addEventListener('click', function() {
    if(input.value !== '') {
        title.innerText = `Title: `;
        year.innerText = `Year: `;
        type.innerText = `Type: `;
        rating.innerText = `Rating: `;
        ageRate.innerText = `Age Rating: `;
        relDate.innerText = `Release Date: `;
        runTime.innerText = `Runtime: `;
        dir.innerText = `Director: `;
        actors.innerText = `Actors: `;
        awards.innerText = `Awards: `;
        box.innerText = `Box Office: `;
        image.hidden = true;
        image.setAttribute('src', '#');
        plot.innerText = `Plot: `;
        const query = input.value.trim();
        const API_URL = `https://www.omdbapi.com/?t=${query}&plot=full&apikey=b53fa51f`;
        const output = fetch(API_URL);
        error.innerText = '';
        input.value = '';
        output
        .then((value) => {
            return value.json();
        })
        .then((value) => {
            if(value.Response === 'True') {
                container.hidden = false;
                reset.disabled = false;
                title.innerText += ` ${value.Title}`;
                year.innerText += ` ${value.Year}`;
                type.innerText += ` ${value.Type}`;
                genre.innerText += ` ${value.Genre}`;
                rating.innerText += ` ${value.imdbRating}`;
                ageRate.innerText += ` ${value.Rated}`;
                relDate.innerText += ` ${value.Released}`;
                runTime.innerText += ` ${value.Runtime}`;
                dir.innerText += ` ${value.Director}`;
                actors.innerText += ` ${value.Actors}`;
                awards.innerText += ` ${value.Awards}`;
                box.innerText += ` ${value.BoxOffice}`;
                image.hidden = false;
                if(value.Poster !== 'N/A') {
                    image.setAttribute('src', value.Poster);
                }
                else {
                    image.setAttribute('alt', 'No poster available')
                }
                plot.innerText += ` ${value.Plot}`;

            }
            else {
                throw new Error('Movie or series not found.')
            }
        })
        .catch((err) => {
            error.innerText = err;
        })
    }
    else {
        error.innerText = 'Please enter a movie or series name.';
    }  
})

reset.addEventListener('click', function() {
    reset.disabled = true;
    container.hidden = true;
    title.innerText = `Title: `;
    year.innerText = `Year: `;
    type.innerText = `Type: `;
    rating.innerText = `Rating: `;
    ageRate.innerText = `Age Rating: `;
    relDate.innerText = `Release Date: `;
    runTime.innerText = `Runtime: `;
    dir.innerText = `Director: `;
    actors.innerText = `Actors: `;
    awards.innerText = `Awards: `;
    box.innerText = `Box Office: `;
    image.hidden = true;
    image.setAttribute('src', '#');
    plot.innerText = `Plot: `;
})
