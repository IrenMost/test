


// for (let i = 0; i < ourTeam.members.length; i++) {
//   ourTeam.members[i].favorites = {};
// }
// ourTeam.members[0].favorites = {
//   myFavMovies_Iren,
//   myFavouriteBooks_Iren,
// };
// ourTeam.members[1].favorites = {
//   favMovies_Gabor,
//   favoriteBooks_Gabor,
// };
// ourTeam.members[2].favorites = {
//   favMovies_Dora,
//   favoriteBooks_Dora,
// };
// ourTeam.members[3].favorites = {
//   favMovies_Viki,
//   favoriteBooks_Viki,
// };


// //Seniority

// for (let i = 0; i < ourTeam.members.length; i++) {
//   let seniority = "";
//   if (ourTeam.members[i].codinglevel < 50) {
//     seniority = "Junior";
//   } else if (
//     ourTeam.members[i].codinglevel >= 50 &&
//     ourTeam.members[i].codinglevel < 75
//   ) {
//     seniority = "Medior";
//   } else {
//     seniority = "Senior";
//   }
//   ourTeam.members[i].codinglevel = {
//     level: ourTeam.members[i].codinglevel,
//     seniority: seniority,
//   };
// }

// //review book

// for (let i = 0; i < myFavouriteBooks_Iren.length; i++) {
//   let review = "";
//   if (myFavouriteBooks_Iren[i].title === "A Végtelen Történet") {
//     review = "izgi";
//   } else  {
//     review = "tanulásgos";
//   } 
 
//   myFavouriteBooks_Iren[i].review = review;
// }
// // dóri
// for (let i = 0; i < favoriteBooks_Dora.length; i++) {
//   let review = "";
//   if (favoriteBooks_Dora[i].title === "Fall of Giants") {
//     review = "dejo1";
//   } else  {
//     review = "dejo2";
//   } 
 
//   favoriteBooks_Dora.review = review;
// }
// //Viki
// for (let i = 0; i < favoriteBooks_Viki.length; i++) {
//   let review = ""
//   if (favoriteBooks_Viki[i].title === "SPARE") {
//     review = "dejo3";
//   } else  {
//     review = "tanulásgos4";
//   } 
 
//   favoriteBooks_Viki[i].review = review;
// }
// //Gábor
// for (let i = 0; i < favoriteBooks_Gabor.length; i++) {
//   let review = ""
//   if (favoriteBooks_Gabor[i].title === "Crazy Town") {
//     review = "izgi5";
//   } else  {
//     review = "tanulásgos6";
//   } 
 
//   favoriteBooks_Gabor[i].review = review;
// }



// //review movie Irén

// for (let i = 0; i < myFavMovies_Iren.length; i++) {
//   let review = "";
//   if (myFavMovies_Iren[i].title === "Holt költők társasága (Dead Poets Society)") {
//     review = "izgi";
//   } else  if (myFavMovies_Iren[i].title === "Nekem8 (Nothing to lose)"){
//     review = "vicces";
//   } else if(myFavMovies_Iren[i].title === "Született gyilkosok (Natural born killers)"){
//     review = "durva";
//   } else {
//     review = "ijesztő";
//   }
 
//   myFavMovies_Iren[i].review = review;
// }

// // movie dóri

// for (let i = 0; i < favMovies_Dora.length; i++) {
//   let review = "";
//   if (favMovies_Dora[i].title === "Gone with the Wind ") {
//     review = "szomorú";
//   } else  if (favMovies_Dora[i].title === "The Silence of the Lambs"){
//     review = "reális";
//   } else if(favMovies_Dora[i].title === "Changeling"){
//     review = "durva";
//   } else {
//     review = "megrázó";
//   }
 
//   favMovies_Dora[i].review = review;
// }
//  // movie viki

 
// for (let i = 0; i < favMovies_Viki; i++) {
//   let review = "";
//   if (favMovies_Viki[i].title === "The Shawshank Redemption") {
//     review = "fordulatos";
//   } else  if (favMovies_Viki[i].title === "The Godfather"){
//     review = "drámai";
//   } else if(favMovies_Viki[i].title === "The Dark Knight"){
//     review = "durva";
//   } else {
//     review = "tanulságos";
//   }
 
//   favMovies_Viki[i].review = review;
// }
//  // movie gábor

 
// for (let i = 0; i < favMovies_Gabor.length; i++) {
//   let review = "";
//   if (favMovies_Gabor[i].title === "Matrix") {
//     review = "lehetséges";
//   } else  if (favMovies_Gabor[i].title === "Breaking Bad"){
//     review = "valós";
//   } else if(favMovies_Gabor[i].title === "The Walking Dead"){
//     review = "durva";
//   } else {
//     review = "apocaliptic";
//   }
 
//   favMovies_Gabor[i].review = review;
// }




// console.log(ourTeam.members[3].favorites);

//delete
// for (const movies of favMovies_Dora) {
//   delete movies.description;
// }

// for (const movies of favMovies_Viki) {
//   delete movies.description;
// }

// for (const movies of myFavMovies_Iren) {
//   delete movies.description;
// }
// for (const movie of favMovies_Gabor) {
 
//     delete movie.description;
// }


// for (const book of favoriteBooks_Dora){
//   delete book.isNewerThan2000;
// }
//  for (const book of favoriteBooks_Viki){
//   delete book.isNewerThan2000;
// }
// for (const book of myFavouriteBooks_Iren){
//   delete book.isNewerThan2000;
// }

// for (const book of favoriteBooks_Gabor){
//   delete book.isNewerThan2000;
// }


// delete
// for(const movies of favMovies_Dora) {
//   delete movies.description;
// }


// Average Age 

let totalYear = 0 

for (const album of bestSellingAlbums) {
totalYear += album.year 
}

const averageYear = totalYear / bestSellingAlbums.length

let thisYear = 2023

const averageAge = thisYear - averageYear

console.log(averageAge)

// oldest/newest album

let newestAlbum = bestSellingAlbums[0]

for (const album of bestSellingAlbums) {
if (album.year > newestAlbum.year) {
    newestAlbum = album
}
}
console.log(newestAlbum.title)

let oldestAlbum = bestSellingAlbums[0]

for (const album of bestSellingAlbums) {
if (album.year < oldestAlbum.year) {
    oldestAlbum = album
}
}
console.log(oldestAlbum.title)
// albums of Eagles


eaglesAlbumsCount = 0
softRockEaglesAlbumsCount = 0

for (const album of bestSellingAlbums){
    if (album.artist === "Eagles") {
        eaglesAlbumsCount += 1
        for (const genre of album.genres){
            if (genre === "soft rock"){
                softRockEaglesAlbumsCount += 1
            }
        }

    }
}
console.log(eaglesAlbumsCount)

for (const album of bestSellingAlbums){
    if (album.artist === "Michael Jackson" || album.artist === "Whitney Houston"){
        album.iLikeIt = true 
        }else{
            album.iLikeIt = false
        }
    }
console.log(bestSellingAlbums)

// //youngest member

// let youngestMember = ourTeam.members[0].name;
// for (const age of ourTeam.members) {
//     if( age.birthday.year > youngestMember.year){
//         youngestMember = age
//     }
// }
// console.log(youngestMember);



// location

















