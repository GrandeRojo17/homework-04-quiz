function printHighScores() {
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function (score) {
      var li = document.createElement("li");
      li.textContent = score.initials + " - " + score.score;
  
      var scoreUl = document.getElementById("score-list");
  
      scoreUl.appendChild(li);
    });
  }
  
  printHighScores();
  