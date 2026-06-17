async function searchMovie(){

let movie =
document.getElementById("movieName").value;

let result =
document.getElementById("result");


if(movie==""){
    result.innerHTML="Please enter movie name";
    return;
}


let url =
`https://www.omdbapi.com/?t=${movie}&apikey=564727fa`;


let response = await fetch(url);

let data = await response.json();


if(data.Response=="True"){

result.innerHTML = `

<div class="movie-card">

<img src="${data.Poster}">

<h2>${data.Title}</h2>

<p>⭐ Rating : ${data.imdbRating}</p>

<p>📅 Year : ${data.Year}</p>

<p>🎭 Genre : ${data.Genre}</p>

<p>${data.Plot}</p>

</div>

`;

}
else{

result.innerHTML="Movie not found 😢";

}

}
