//Prepare the words
const nouns = ["apple","cat","zebra","computers","candle"];
const adjectives = ["happy","beautiful","pink","dead","crazy"];
const verbs=["write","learn","play","give","kill"];
const adverbs =["secretly","weakly","quickly","loudly","away"];
const conjunctions=["and","for","well","as long as","or"];
const names=["Jon","Doe","Viki","Irén","Dóra"];


function bandNameGenerator(string) {
// (hány betűnől áll a string) 1 : length milyen maradékot ad (%) (maradék lehet 0,1,2,3,4)
 let length = string.length;
if (length % nouns.length === 0) {
    console.log(nouns[0])
} else if (length % nouns.length === 1) {
    console.log(nouns[1])
} else if (length % nouns.length === 2) {
    console.log(nouns[2])
}else if (length % nouns.length === 3) {
    console.log(nouns[3]) 
 } else if (length % nouns.length === 4) {
    console.log(nouns[4])

} }

for (const words of nouns) {
    let length = string.length;
    if (length % nouns.length === i)
}
bandNameGenerator("mimk");