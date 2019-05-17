
function randomNumbers(){
  // get 2 random numbers between 0 and the length of each array in the 'words' object
  let adjNumber = Math.floor(Math.random() * words.adj.length);
  let nounNumber = Math.floor(Math.random() * words.noun.length);
  // take those two numbers and plug them into the postSentence() function
  console.log(adjNumber);
  return postSentence(adjNumber, nounNumber);
}

function postSentence(x, y){
  // plug those numbers in to pull a word from each words array
  let adj = words.adj[x];
  let noun = words.noun[y];
// plug them into the template literal
  let template = `<div class="output">${adj} ${noun}</div>`;
// post those two words to the DOM
  document.getElementById("sentence").innerHTML=template;
}

let words = {
  "adj": [
    "bloody",
    "rotted",
    "rotten",
    "devoured",
    "bleeding",
    "cannibalistic",
    "demonic",
    "buried",
    "entombed",
    "torched",
    "scarred",
    "charred",
    "burnt",
    "decapitated",
    "crushed",
    "morbid",
    "satanic",
    "hellish",
    "fallen",
    "putrid",
    "disembowled",
    "mangled",
    "smashed",
    "butchered",
    "dead",
    "maimed",
    "shoveled",
    "destroyed",
    "consumed",
    "eaten",
    "slashed",
    "splattered",
    "hollowed",
    "bloodstained",
    "murdered",
    "skeletal",
    "sadistic",
    "gutted",
    "defiled",
    "desecrated",
    "dismembered",
    "wretched",
    "tortured",
    "crucified",
    "cut up",
    "encased",
    "demented",
    "rabid",
    "disfigured",
    "hated",
    "furnace",
    "mummified",
    "barbed wire",
    "bagged",
    "suffocated",
    "unnatural",
    "skewered",
    "vile",
    "massacred",
    "perverse",
    "moth eaten",
    "barbaric",
    "bludgeoned",
    "mutated",
    "blowtorched",
    "grotesque",
    "blood thirsty",
    "sickened",
    "disposed",
    "headless",
    "possesed"
  ],
  "noun": [
    "corpse",
    "body",
    "fetus",
    "vermin",
    "rodents",
    "soul",
    "spirit",
    "human",
    "head",
    "children",
    "devils",
    "face",
    "skin",
    "flesh",
    "skulls",
    "bodies",
    "remains",
    "maggots",
    "brains",
    "organs",
    "cultist",
    "bones",
    "skeleton",
    "organs",
    "swarm",
    "entity",
    "suffering",
    "crucifix",
    "demon",
    "cadaver",
    "hellhounds"
  ]
}
