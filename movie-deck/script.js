//to store movies data
let movies = [];

//store  page number
let currentPage = 1;

const API_KEY = 'f531333d637d0c44abc85b3e74db2186'

//step 1
async function fetchMovies(page) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);

        const result = await response.json();
        movies = result.results
        // console.log(result.results)

        renderMovies(movies)


    } catch (error) {
        console.log(error)
    }
}

fetchMovies(currentPage)

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
        <i class="favourite-icon fa-regular fa-heart fa-2xl" id="${title}"></i>
    </section>

        `;

        const favouriteIconBtn = listItem.querySelector('.favourite-icon');

        favouriteIconBtn.addEventListener('click', (event) => {
            alert('clicked')
        })


        movieList.appendChild(listItem);


    })



}
//sort by date
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

//sort by rating
const sortByRatingButton = document.getElementById('sort-by-rating');

let firstSortByRatingClicked = true;

function sortByRating() {
    let sortedMovies;

    if (firstSortByRatingClicked) {
        //use the sort fucntion to create a new array of movies sorted based on votr average on ascending order
        sortedMovies = movies.sort(function (a, b) {
            return a.vote_average - b.vote_average
        });
        sortByRatingButton.textContent = "Sort by rating (most to least)";
        firstSortByRatingClicked = false
    } else if (!firstSortByRatingClicked) {
        //use the sort fucntion to create a new array of movies sorted based on votr average on descending order
        sortedMovies = movies.sort(function (a, b) {
            return b.vote_average - a.vote_average
        });
        sortByRatingButton.textContent = "Sort by rating (least to most)";
        firstSortByRatingClicked = true
    }

    renderMovies(sortedMovies);
}

sortByRatingButton.addEventListener('click', sortByRating)


// pagination element

const pagnination = document.querySelector("div.pagnination");
const prevButton = document.querySelector("button#prev-button");
const pageNumberButton = document.querySelector("button#page-number-button");
const nextButton = document.querySelector("button#next-button");


prevButton.addEventListener('click', () => {
    //decrease the current pafe by 1;
    currentPage--;
    //fetch the movies for the previous page
    fetchMovies(currentPage);
    //update the page number button text
    pageNumberButton.textContent = `Current Page: ${currentPage}`;
    //Disable the previous button when the current page is 1
    if (currentPage === 1) {
        prevButton.disabled = true;
        nextButton.disabled = false;
    } else if (currentPage === 2) {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
});


//lets assume that we only have pages from 1-3

nextButton.addEventListener('click', () => {
    //increase the current page by 1
    currentPage++;
    //fetch the movies based on current page
    fetchMovies(currentPage);
    //update current page number
    pageNumberButton.textContent = `Current Page: ${currentPage}`;
    //Disable the next  button when the current page is 3
    if (currentPage === 3) {
        prevButton.disabled = false;
        nextButton.disabled = true;
    } else if (currentPage === 2) {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
});


//search by movie name API response

const searchMovies = async (searchedMovie) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`);
        const result = await response.json();
        movies = result.results;
        renderMovies(movies)
    } catch (error) {
        console.log(error);
    }
}
//search elements

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    searchMovies(searchInput.value);
    pagnination.style.display = 'none';

})



// `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`


//favourite icon

