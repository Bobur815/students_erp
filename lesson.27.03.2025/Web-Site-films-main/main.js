// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'

let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}` 
let tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
let tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`

fetch(tokenTop).then(data => data.json()).then(data => console.log(data))

fetch(tokenTop)
.then(response=>response.json())
.then(data=>{
    displayMovies(data.results);
})
.catch(error=>console.error("Xatolik yuz berdi", error));

function displayMovies(movies) {
    moviesContainer.innerHTML=""
    movies.forEach(element => {
        
    });
}