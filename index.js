function renderMovies(movies) {
    const movieHtmlArray = movies.map(function
        (currentMovie) {
        return `
            <div class="movie col-4">
                <div class="card" style="width: 18rem;">
                    <img src="${currentMovie.Poster}" class="card-img-top" alt="${currentMovie.Title} poster">
                    <div class="card-body">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                        <p class="card-text">Released: ${currentMovie.Year}</p>
                        <a href="https://www.imdb.com/title/${currentMovie.imdbID}/" class="btn btn-primary">IMDB</a>
                    </div>
                </div>
            </div>`;
    });
    const results = document.querySelector('#results');
    results.innerHTML = movieHtmlArray.join('');
}
// renderMovies(movieData)
const myForm = document.querySelector('#search-form');
myForm.addEventListener('submit', function (e) {
    preventDefault(e);
    renderMovies(movieData)
    console.log(movieData)
})