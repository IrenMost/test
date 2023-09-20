//Prepare the words
const nouns = ["apple","cat","zebra","computers","candle"];
const adjectives = ["happy","beautiful","pink","dead","crazy"];
const verbs=["write","learn","play","give","kill"];
const adverbs =["secretly","weakly","quickly","loudly","away"];
const conjunctions=["and","for","well","as long as","or"];
const names=["Jon","Doe","Viki","Irén","Dóra"];

const brandName = [];
function bandNameGenerator(string) {
    let length = string.length;
    for (let i = 0; i < nouns.length; i++) {
        if (length % nouns.length === i) {
            console.log(adjectives[i + 1] + " " + nouns[i - 1])
        }
    }
}

bandNameGenerator("amasssma");