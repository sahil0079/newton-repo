
let movies = [];
const API_KEY = 'f531333d637d0c44abc85b3e74db2186'

//step 1
async function fetchMovies() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

        const result = await response.json();
        movies = result.results
        // console.log(result.results)

        renderMovies(movies)


    } catch (error) {
        console.log(error)
    }
}

fetchMovies()

//step 2 

const renderMovies = (movies) => {

    const movieList = document.getElementById('movies-list');

    movieList.innerHTML = "";

    movies.map((movie) => {
        // console.log(movie)

        const { poster_path, title, vote_count, vote_average } = movie;

        let listItem = document.createElement('li');

        listItem.className = 'card';

        let imgSrc = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png";


        listItem.innerHTML += `

        <img
             class="poster"
             src=${imgSrc}
             alt=${title}
        />

        <p class="title">${title}</p>

        <section class="vote-favoriteIcon">
        <section class="vote">
            <p class="vote-count">Votes: ${vote_count}</p>
            <p class="vote-average">Rating: ${vote_average}</p>
        </section>
        <i class="fa-regular fa-heart fa-2xl" id="favourite-icon"></i>
    </section>

        `
        movieList.appendChild(listItem);










    })



}

const sortByDateButton = document.getElementById('sort-by-date');


sortByDateButton.addEventListener("click", sortByDate)


let firstSortByDateClicked = true;
function sortByDate() {
    let sortedMovies;
    //use the sort function to create a new array of sorted movies in ascending order

    if (firstSortByDateClicked) {
        sortedMovies = movies.sort(function (a, b) {
            return new Date(a.release_date) - new Date(b.release_date)

        })
        sortByDateButton.textContent = "Sort by date (latest to oldest)";
        firstSortByDateClicked = false
    } else if (!firstSortByDateClicked) {
        //use the sort function to create a new array of sorted movies in descending order

        sortedMovies = movies.sort(function (a, b) {
            return new Date(b.release_date) - new Date(a.release_date)

        })
        sortByDateButton.textContent = "Sort by date (oldest to latest)";
        firstSortByDateClicked = true;


        console.log(sortedMovies)

    }





    renderMovies(sortedMovies)

}