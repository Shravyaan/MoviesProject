let defaultval = "avenger";

function findmovie() {
  let searchmovie = document.getElementById("searchhere");

  let searchvalue = searchmovie.value;
  defaultval = searchvalue;
  console.log(searchvalue);
  console.log(defaultval);
  getMovie();
}

async function getMovie() {
  let movies = await fetch(
    `https://www.omdbapi.com/?s=${defaultval}&apikey=a640dde7`,
  );
  movies = await movies.json();

  let omdMovies = document.getElementById("showmoviedetails");

  omdMovies.innerHTML = "";

  movies.Search.map((movie) => {
    return (omdMovies.innerHTML += `
        <div class="moviescard">
        <div><h3> ${movie.Title}</h3></div>
        <div class="movieimg"><img src="${movie.Poster}" alt=""></div>
        <div>${movie.Year}</div>
        `);
  });
}

getMovie();
