// endGameTest = document.querySelector("button");
// gameStats = document.querySelector("#game-stats");
// footer = document.querySelector("footer");

// endGameTest.addEventListener("click", function () {
//   gameStats.style.display = "0";
//   footer.style.display = "0";
// });

let reset = document.querySelector("#reset");
// console.log(reset)
let scoreJoueur = document.querySelector("#score-player");
// console.log(scoreJoueur)
let scoreOrdinateur = document.querySelector("#score-computer");
// console.log(scoreOrdinateur)
let btnJoueur = [...document.getElementsByClassName(".attack-img")];
console.log(btnJoueur);
let opierreBtn = document.querySelector("#opierre");
let ofeuilleBtn = document.querySelector("#ofeuille");
let ociseauxBtn = document.querySelector("#ociseaux");
let message = document.getElementById("message");
console.log(message);
let nextBtn = document.querySelector("#nextGame");
console.log(nextBtn);
let play = document.querySelector(".play-button");
console.log(play);
let choixPlayer = "";


 document.querySelector("#Thor").onclick = function () {
  let choixPlayer = 0;
  doChoixComputer(choixPlayer);
};
document.querySelector("#Captain").onclick = function () {
  let choixPlayer = 1;
  doChoixComputer(choixPlayer);
  // return choixComputer
};
document.querySelector("#Hawk").onclick = function () {
  let choixPlayer = 2;
  //  return choixComputer
  doChoixComputer(choixPlayer);
};

const doChoixComputer = (choixPlayer) => {
  let nbAleatoire = Math.floor(Math.random() * 3);
  console.log(nbAleatoire, choixPlayer);
  // 0= thor
  // 1 = captain
  // 2 = hawk
  if (nbAleatoire == choixPlayer) {
    message.textContent = "Vous avez une puissance égale !";
  } else if (
    (choixPlayer == 0 && nbAleatoire == 1) ||
    (choixPlayer == 1 && nbAleatoire == 2) ||
    (choixPlayer == 2 && nbAleatoire == 0)
  ) {
    message.textContent =
      "Vous avez une puissance plus élevé que l'ordinateur ! :)";
    scoreJoueur.textContent++
    console.log(scoreJoueur)
  } else if (
    (choixPlayer == 1 && nbAleatoire == 0) ||
    (choixPlayer == 2 && nbAleatoire == 1) ||
    (choixPlayer == 0 && nbAleatoire == 2)
  ) {
    message.textContent = "L'ordinateur a une puissance plus élevé...";
    scoreOrdinateur.textContent++
  }




  if (scoreJoueur.textContent == "10"){
    message.textContent = `Vous avez gagné !`
  scoreJoueur.textContent = "0"
  console.log(scoreJoueur.textContent);
  scoreOrdinateur.textContent = "0"
  console.log(scoreOrdinateur);
  
  }
  else if (scoreOrdinateur.textContent =="10"){
  message.textContent = "Vous perdu..."
  scoreJoueur.textContent = "0"
  scoreOrdinateur.textContent = "0"
  console.log(scoreOrdinateur);
}
};