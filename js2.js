for (let i = 0; i < favMovies_Gabor.length; i++) {
  let genre = "";
  if (favMovies_Gabor[i].title === "Matrix") {
    review = "lehetséges";
  } else  if (favMovies_Gabor[i].title === "Breaking Bad"){
    review = "valós";
  } else if(favMovies_Gabor[i].title === "The Walking Dead"){
    review = "durva";
  } else {
    review = "apocaliptic";
  }
 
  favMovies_Gabor[i].review = review;
}
