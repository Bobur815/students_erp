// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

let token = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}` 

let append = document.querySelector(".append");
let btns = document.querySelectorAll(".btns");
let btn = document.querySelector(".btn");
let next = document.querySelector(".next");
let title = document.querySelector(".title");
let prev = document.querySelector(".prev");
let movieName

btns.forEach(btns=>{
    btns.addEventListener("click", (event) => {
        let movieName=event.target.value;
        window.localStorage.setItem("movie_name", movieName)
        window.localStorage.setItem("page", 1);
        renderMovie(movieName,1);
    })
})

let searchName
search.onkeyup=()=>{
    searchName=search.value
}

btn.addEventListener("click", async()=>{
    page=window.localStorage.getItem("page");
    let movieData =await fetch(`https://api.themoviedb.org/3/movie/${movieName}?api_key=${API_KEY}&page=${page}`);
    movieData=await movieData.json();
    console.log(movieData);
})

next.addEventListener("click",()=>{
    let page = +(window.localStorage.getItem("page") || 1) + 1;
    window.localStorage.setItem("page", page);
    title.textContent=page
    let movieName=window.localStorage.getItem("movie_name") || "top_rated";
    renderMovie(movieName,page)
})

prev.addEventListener("click",()=>{
    let page = +window.localStorage.getItem("page");
    page=page>1?page-1:page
    window.localStorage.setItem("page", page);
    title.textContent=page
    let movieName=window.localStorage.getItem("movie_name") || "top_rated";
    renderMovie(movieName,page)
})


async function renderMovie(movieName, page) {
    append.innerHTML=null;
    let API = `https://api.themoviedb.org/3/movie/${movieName}?api_key=${API_KEY}&page=${page}`
    let top = await fetch(API);
    top = await top.json()
    
    for (let element of top.results) {
        append.innerHTML+=`<div class="movie">
        <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
        <div class="movie-info">
            <h3>${element.original_title}</h3>
            <span class="orange">${element.vote_average}</span>
        </div>
        <span class="date">${element.release_date}</span>
    </div>` 
    }
}

renderMovie("top_rated", 1);