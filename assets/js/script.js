endGameTest = document.querySelector("button");
gameStats = document.querySelector("#game-stats");
footer = document.querySelector("footer");

endGameTest.addEventListener('click', function () {
    gameStats.style.display = "0";
    footer.style.display = "0";
})