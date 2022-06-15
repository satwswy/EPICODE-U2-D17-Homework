const moviesList = document.querySelector(".movies-list");
const addMovieForm = document.querySelector(".add-movie-form");
const nameValue = document.getElementById("name-value");
const descriptionValue = document.getElementById("description-value");
const categoryValue = document.getElementById("category-value");
const imageUrlValue = document.getElementById("imageUrl-value");
let output = "";
const url = "https://striveschool-api.herokuapp.com/api/movies/";

const displayData = (genre) => {
  fetch(url + genre, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTUyNzk1ODksImV4cCI6MTY1NjQ4OTE4OX0.RBSx7SOcxql-n0tNI6nXsZdTp_yGMJdDDo8A7MLMZEk",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((movie) => {
        output += `
        <div class="card" >
        <img src="${movie.imageUrl}" class="card-img-top" alt="${movie.name}">
        <div class="card-body">
          <h5 class="card-title">${movie.name}</h5>
          <h5 class="card-title">${movie.category}</h5>
          <p class="card-text">${movie.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
            `;
      });
    });
  moviesList.innerHTML = output;
};
addMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTUyNzk1ODksImV4cCI6MTY1NjQ4OTE4OX0.RBSx7SOcxql-n0tNI6nXsZdTp_yGMJdDDo8A7MLMZEk",
    },
    body: JSON.stringify({
      name: nameValue.value,
      description: descriptionValue.value,
      category: categoryValue.value,
      imageUrl: imageUrlValue.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {});
});
