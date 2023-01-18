endGameTest = document.querySelector("button");
gameStats = document.querySelector("#game-stats");
footer = document.querySelector("footer");

endGameTest.addEventListener('click', function () {
    gameStats.style.display = "0";
    footer.style.display = "0";
})

// let playerChoose= document.getElementById("#game-area");
// console.log(playerChoose)
// let chooseplayer = document.getElementsByClassName(".attack-list")
// console.log(chooseplayer)
// let choseplayer = document.querySelector('#game-area')
// console.log(choseplayer)

// var player;
// var ordi;
// function Votrechoix(v){
// vous=v;document.votrechoix.src='choix'+v+'.gif';
// Choixordi();
// }

// function Choixordi(){
// ordi=Math.round(Math.random()*2)+1;
// document.choixordi.src='choix'+ordi+'.gif';
// Pipaci();
// }

// function Pipaci(){
// if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2))
// {alert('BRAVO!!!!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
// else{Ordipipaci();}
// }

// function Ordipipaci(){
// if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2))
// {alert('PERDU!!!!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
// else{alert('AOUCH!\nA REFAIRE!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
// }




// const game = () => {
//     let playerScore = 0;
//     let computerScore = 0;
//     let moves = 0;
 
 
//     // Function to
//     const playGame = () => {
//         const rockBtn = document.querySelector('.rock');
//         const feuille = document.querySelector('.Captain');
//         const scissorBtn = document.querySelector('.scissor');
//         const playerOptions = [rockBtn,paperBtn,scissorBtn];
//         const computerOptions = ['rock','paper','scissors']
         
//         // Function to start playing game
//         playerOptions.forEach(option => {
//             option.addEventListener('click',function(){
 
//                 const movesLeft = document.querySelector('.movesleft');
//                 moves++;
//                 movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
 
//                 const choiceNumber = Math.floor(Math.random()*3);
//                 const computerChoice = computerOptions[choiceNumber];
 
//                 // Function to check who wins
//                 winner(this.innerText,computerChoice)
                 
//                 // Calling gameOver function after 10 moves
//                 if(moves == 10){
//                     gameOver(playerOptions,movesLeft);
//                 }
//             })
//         })
         
//     }
 
//     // Function to decide winner
//     const winner = (player,computer) => {
//         const result = document.querySelector('#scores.container');
//         const playerScoreBoard = document.querySelector('.score-player');
//         const computerScoreBoard = document.querySelector('.score-computer');
//         player = player.toLowerCase();
//         computer = computer.toLowerCase();
//         if(player === computer){
//             result.textContent = 'Tie'
//         }
//         else if(player == 'Thor'){
//             if(computer == 'Captain'){
//                 result.textContent = 'Computer Won';
//                 computerScore++;
//                 computerScoreBoard.textContent = computerScore;
 
//             }else{
//                 result.textContent = 'Player Won'
//                 playerScore++;
//                 playerScoreBoard.textContent = playerScore;
//             }
//         }
//         else if(player == 'Hawk'){
//             if(computer == 'Thor'){
//                 result.textContent = 'Computer Won';
//                 computerScore++;
//                 computerScoreBoard.textContent = computerScore;
//             }else{
//                 result.textContent = 'Player Won';
//                 playerScore++;
//                 playerScoreBoard.textContent = playerScore;
//             }
//         }
//         else if(player == 'Captain'){
//             if(computer == 'Hawk'){
//                 result.textContent = 'Computer Won';
//                 computerScore++;
//                 computerScoreBoard.textContent = computerScore;
//             }else{
//                 result.textContent = 'Player Won';
//                 playerScore++;
//                 playerScoreBoard.textContent = playerScore;
//             }
//         }
//     }
 
//     // Function to run when game is over
//     const gameOver = (playerOptions,movesLeft) => {
 
//         const chooseMove = document.querySelector('.move');
//         const result = document.querySelector('.result');
//         const reloadBtn = document.querySelector('.reload');
 
//         playerOptions.forEach(option => {
//             option.style.display = 'none';
//         })
 
      
//         chooseMove.innerText = 'Game Over!!'
//         movesLeft.style.display = 'none';
 
//         if(playerScore > computerScore){
//             result.style.fontSize = '2rem';
//             result.innerText = 'You Won The Game'
//             result.style.color = '#308D46';
//         }
//         else if(playerScore < computerScore){
//             result.style.fontSize = '2rem';
//             result.innerText = 'You Lost The Game';
//             result.style.color = 'red';
//         }
//         else{
//             result.style.fontSize = '2rem';
//             result.innerText = 'Tie';
//             result.style.color = 'grey'
//         }
//         reloadBtn.innerText = 'Restart';
//         reloadBtn.style.display = 'flex'
//         reloadBtn.addEventListener('click',() => {
//             window.location.reload();
//         })
//     }
// }



    // let reset = document.querySelector("#reset");
    // // console.log(reset)
    // let scoreJoueur = document.querySelector("#score-player");
    // // console.log(scoreJoueur)
    // let scoreOrdinateur = document.querySelector("#score-computer")
    // // console.log(scoreOrdinateur)
    // let btnJoueur = [...document.getElementsByClassName(".attack-img")];
    // console.log(btnJoueur)
    // let opierreBtn = document.getElementById("opierre");
    // let ofeuilleBtn = document.getElementById("ofeuille");
    // let ociseauxBtn = document.getElementById("ociseaux");
    // let message = document.getElementById("message");
    // console.log(message)
    // let nextBtn = document.querySelector("#nextGame");
    // console.log(nextBtn)
    // let play = document.querySelector(".play-button")
    // console.log(play)


// const jouerManche = (e) => {
//     let choix = e.target.closest(".btnJoueur");
//     console.log(choix)
      
//         btnJoueur.forEach((btn) => {
//           btn.classList.add("desactivated");
//           btn.removeEventListener("click", jouerManche);
//         });
      
//         choix.classList.remove("desactivated");
//         choix.classList.add("active");
      
//         let choixJoueur = choix.id;
      
//         let choixOrdi = faireChoixOridnateur();
      
//         verifierGagnant(choixJoueur, choixOrdi);
      
//         // nextBtn.style.visibility = "visible";
//       };
      
//       const PIERRE = "pierre";
//       const FEUILLE = "feuille";
//       const CISEAUX = "ciseaux";
      
//       const faireChoixOrdinateur = () => {
//         // 0 = pierre
//         // 1 = feuille
//         // 2 = ciseaux
      
//         let nbAleatoire = Math.floor(Math.random() * 3);
//         switch (nbAleatoire) {
//           case 0:
//             opierreBtn.classList.add("active");
//             return PIERRE;
//           case 1:
//             ofeuilleBtn.classList.add("active");
//             return FEUILLE;
//           default:
//             ociseauxBtn.classList.add("active");
//             return CISEAUX;
//         }
  
//       };
      
//       const verifierGagnant = (choixJoueur, choixOrdi) => {
//         if (choixJoueur == choixOrdi) {
//           message.textContent = "Votre puissance d'armement est égale !!";
//           alert(`Votre puissance est égale`)
//           return;
//         }
      
//         if (choixJoueur == PIERRE) {
//           if (choixOrdi == FEUILLE) {
//             return victoireOrdinateur();
//           } else if (choixOrdi == CISEAUX) {
//             return victoireJoueur();
//           }
//         }
      
//         if (choixJoueur == FEUILLE) {
//           if (choixOrdi == CISEAUX) {
//             return victoireOrdinateur();
//           } else if (choixOrdi == PIERRE) {
//             return victoireJoueur();
//           }
//         }
      
//         if (choixJoueur == CISEAUX) {
//           if (choixOrdi == PIERRE) {
//             return victoireOrdinateur();
//           } else if (choixOrdi == FEUILLE) {
//             return victoireJoueur();
//           }
//         }
//       };
      
//       const victoireOrdinateur = () => {
//         message.textContent = "L'ordinateur a une puissance plus élevé...";
//         alert(`Votre puissance est plus élevé `)
//         scoreOrdinateur.textContent++;
//       };
      
//       const victoireJoueur = () => {
//         message.textContent = "Vous avez une puissance plus élevé que l'ordinateur ! :)";
//         alert(`Vous avez une puissance plus élevé que l'ordinateur ! :`)
//         scoreJoueur.textContent++;
//       };
      
//       const preparerNouvelleManche = () => {
//         btnJoueur.forEach((btn) => {
//           btn.classList.remove("desactivated");
//           btn.classList.remove("active");
      
//           btn.addEventListener("click", jouerManche);
//         });
      
//         nextBtn.style.visibility = "hidden";
      
//         opierreBtn.classList.remove("active");
//         ofeuilleBtn.classList.remove("active");
//         ociseauxBtn.classList.remove("active");
      
//         message.textContent = "Combattez !";
//       };
      
//       nextBtn.addEventListener("click", preparerNouvelleManche);{

//       }
      
//       btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));
      
//       reset.addEventListener("click", () => {
//         scoreJoueur.textContent = 0;
//         scoreOrdinateur.textContent = 0;
      
//         preparerNouvelleManche();
//       });


let reset = document.querySelector("#reset");
// console.log(reset)
let scoreJoueur = document.querySelector("#score-player");
// console.log(scoreJoueur)
let scoreOrdinateur = document.querySelector("#score-computer")
// console.log(scoreOrdinateur)
let btnJoueur = [...document.getElementsByClassName(".attack-img")];
console.log(btnJoueur)
let opierreBtn = document.getElementById("opierre");
let ofeuilleBtn = document.getElementById("ofeuille");
let ociseauxBtn = document.getElementById("ociseaux");
let message = document.getElementById("message");
console.log(message)
let nextBtn = document.querySelector("#nextGame");
console.log(nextBtn)
let play = document.querySelector(".play-button")
console.log(play)
// let Thor = document.querySelector("#Thor")
// let Capitaine = document.querySelector("#Captain")
// let Hawk = document.querySelector("#Hawk")

document.querySelector(".play-button").onclick = function(){
    
    console.log(message);
    message.textContent = 'Combattez !';
    for ( i=0 ; i<10 ; i++){
        document.querySelector("#Thor").onclick = function(){
            choixPlayer = "Thor"
        }
        document.querySelector("#Captain").onclick = function(){
            choixPlayer = "Captain"
        }
        document.querySelector("#Hawk").onclick = function(){
            choixPlayer = "Hawk"
        }
        
        // if (Thor.addEventListener("Click" )){
        //     choixPlayer = "Thor"
        // }
        // if (Capitaine.addEventListener("Click")){
        //     choixPlayer = "Capitaine"
        // }
        // if (Hawk.addEventListener("Click")){
        //     choixPlayer = "Hawk"
        // }

        let nbAleatoire = Math.floor(Math.random() * 2)+1;
        const faireChoixOrdinateur = () => {
            // 0 = pierre
            // 1 = feuille
            // 2 = ciseaux
          
        switch (nbAleatoire) {
            case 0:
                choixComputer = "Thor";
                return CAPITAINE;
            case 1:
                choixComputer = "Capitaine";
                return CAPITAINE;
            default:
                choixComputer = "Hawk";
                return HAWK;
            }
        }
        const THOR = "Thor";
        const CAPITAINE = "Captain";
        const HAWK = "Hawk";
        
        if (choixPlayer == choixComputer){
            message.textContent = 'Vous avez une force égale'
        }
        if (choixJoueur == THOR) {
            if (choixOrdi == CAPITAINE) {
              return victoireOrdinateur();
            } else if (choixOrdi == HAWK) {
              return victoireJoueur();
            }
          }
        if (choixJoueur == CAPITAINE) {
            if (choixOrdi == HAWK) {
              return victoireOrdinateur();
            } else if (choixOrdi == THOR) {
              return victoireJoueur();
            }
          }
        if (choixJoueur == HAWK) {
            if (choixOrdi == THOR) {
              return victoireOrdinateur();
            } else if (choixOrdi == CAPITAINE) {
              return victoireJoueur();
            }
          }
        const victoireJoueur = () => {
            message.textContent = "Vous avez une puissance plus élevé que l'ordinateur ! :)";
            scoreJoueur.textContent++;
          };

        const victoireOrdinateur = () => {
            message.textContent = "L'ordinateur a une puissance plus élevé...";
            alert(`Votre puissance est plus élevé `)
            scoreOrdinateur.textContent++;
          };
};
}

// play.addEventListener("click", function(){
//     message.textContent ='Combattez !'
//     for ( i=0 ; i<10 ; i++){
//         if (Thor.addEventListener("Click" )){
//             choixPlayer = "Thor"
//         }
//         if (Capitaine.addEventListener("Click")){
//             choixPlayer = "Capitaine"
//         }
//         if (Hawk.addEventListener("Click")){
//             choixPlayer = "Hawk"
//         }

//         let nbAleatoire = Math.floor(Math.random() * 2)+1;
//         const faireChoixOrdinateur = () => {
//             // 0 = pierre
//             // 1 = feuille
//             // 2 = ciseaux
          
//         switch (nbAleatoire) {
//             case 0:
//                 choixComputer = "Thor";
//                 return CAPITAINE;
//             case 1:
//                 choixComputer = "Capitaine";
//                 return CAPITAINE;
//             default:
//                 choixComputer = "Hawk";
//                 return HAWK;
//             }
//         }
//         const THOR = "Thor";
//         const CAPITAINE = "Capitaine";
//         const HAWK = "Hawk";
        
//         if (choixPlayer == choixComputer){
//             message.textContent = 'Vous avez une force égale'
//         }
//         if (choixJoueur == THOR) {
//             if (choixOrdi == CAPITAINE) {
//               return victoireOrdinateur();
//             } else if (choixOrdi == HAWK) {
//               return victoireJoueur();
//             }
//           }
//         if (choixJoueur == CAPITAINE) {
//             if (choixOrdi == HAWK) {
//               return victoireOrdinateur();
//             } else if (choixOrdi == THOR) {
//               return victoireJoueur();
//             }
//           }
//         if (choixJoueur == HAWK) {
//             if (choixOrdi == THOR) {
//               return victoireOrdinateur();
//             } else if (choixOrdi == CAPITAINE) {
//               return victoireJoueur();
//             }
//           }
//         const victoireJoueur = () => {
//             message.textContent = "Vous avez une puissance plus élevé que l'ordinateur ! :)";
//             scoreJoueur.textContent++;
//           };

//         const victoireOrdinateur = () => {
//             message.textContent = "L'ordinateur a une puissance plus élevé...";
//             alert(`Votre puissance est plus élevé `)
//             scoreOrdinateur.textContent++;
//           };

//         }
//     })