//Prepare the words
const nouns = ["apple","cat","zebra","computers","candle"];
const adjectives = ["happy","beautiful","pink","dead","crazy"];
const verbs=["write","learn","play","give","kill"];
const adverbs =["secretly","weakly","quickly","loudly","away"];
const conjunctions=["and","for","well","as long as","or"];
const names=["Jon","Doe","Viki","Irén","Dóra"];


// function bandNameGenerator(string) {
// // (hány betűnől áll a string) 1 :(5) length milyen maradékot ad (%) (maradék lehet 0,1,2,3,4)
//  let length = string.length;
// if (length % nouns.length === 0) {
//     console.log(nouns[0])
// } else if (length % nouns.length === 1) {
//     console.log(nouns[1])
// } else if (length % nouns.length === 2) {
//     console.log(nouns[2])
// }else if (length % nouns.length === 3) {
//     console.log(nouns[3]) 
//  } else if (length % nouns.length === 4) {
//     console.log(nouns[4])

// } }




const brandName = [];
function bandNameGenerator(string) {
    
let length = string.length;
for (let i = 0; i < nouns.length; i++) {
    if (length % nouns.length === i) {
        console.log(adjectives[i] + " " + nouns[i-1])
    }
    function album (brandName) {
        if (brandName === "1111") {
            console.log("jaja")}
    }
    album(brandName)
} return brandName

}

bandNameGenerator("1111");

    // function albumTitleGenerator (brandName) {
    //   if (brandName === "crazy computers") {
    //     console.log()
    //   }

    //     }
    //     albumTitleGenerator(brandName);
    
    // const letters = ["a", "b", "c","", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    // const brandName = [];


// function bandNameGenerator(string) {
//     let length = string.length;
//     for (let i = 0; i < nouns.length; i++) {
//         if (length % nouns.length === i) {
//             console.log(adjectives[i] + " " + nouns[i - 1]);
//             brandName.push(adjectives[i] + " " + nouns[i - 1])
//         }
//     }
//     return brandName
//     function albumTitleGenerator (brandName){
//         if (brandName === "crazy computers") {
//             console.log()
//         }
//     }

// }

// bandNameGenerator("1111");
// console.log(brandName);


// // function albumTitleGenerator(brandName) {
// //     if (brandName === "crazy computers") {
// //         console.log()
// //     }

// // }
// // albumTitleGenerator(brandName);

// // const letters = ["a", "b", "c", "", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]