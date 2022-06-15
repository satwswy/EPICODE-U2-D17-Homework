// Fetch all categories
// Using a loop fetch by category using displayData
const moviesList = document.querySelector(".movies-list");
const addMovieForm = document.querySelector(".add-movie-form");

let grid = document.getElementById("grid");
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
        const element = document.createElement("div");
        element.innerHTML = `
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
            grid.appendChild(element);
            console.log(element)
      });

     
    });
    
};
const getCategories = async () => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTUyNzk1ODksImV4cCI6MTY1NjQ4OTE4OX0.RBSx7SOcxql-n0tNI6nXsZdTp_yGMJdDDo8A7MLMZEk",
      },
    });
    const arrayOfCategories = await res.json();
    console.log(arrayOfCategories);
    arrayOfCategories.forEach((category) => {
      displayData(category);
    });
  } catch (err) {
    console.log(err);
  }
};

addMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name-value").value;
  const description = document.getElementById("description-value").value;
  const category = document.getElementById("category-value").value;
  const imageUrl = document.getElementById("imageUrl-value").value;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTUyNzk1ODksImV4cCI6MTY1NjQ4OTE4OX0.RBSx7SOcxql-n0tNI6nXsZdTp_yGMJdDDo8A7MLMZEk",
    },
    body: JSON.stringify({
      name: name,
      description: description,
      category: category,
      imageUrl: imageUrl,
    }),
  })
    .then((res) => res.json())
    .then((data) => {});
});
window.onload = getCategories();
window.onload = displayData();
