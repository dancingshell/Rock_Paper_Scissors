 function changeRock() {

  if (document.getElementById("clickrock").src = "image_source/rock.jpg") 
  {
      document.getElementById("clickpaper").style.display = "none";
      document.getElementById("clickscissors").style.display = "none";
      document.getElementById("paper").style.border = 0;
      document.getElementById("scissors").style.border = 0;
  }
}

function changePaper() {
  if (document.getElementById("clickpaper").src = "image_source/paper.png") 
  {
      document.getElementById("clickrock").style.display = "none";
      document.getElementById("clickscissors").style.display = "none";
      document.getElementById("rock").style.border = 0;
      document.getElementById("scissors").style.border = 0;
  }
}

function changeScissors() {
  if (document.getElementById("clickscissors").src = "image_source/scissors.png") 
  {
      document.getElementById("clickrock").style.display = "none";
      document.getElementById("clickpaper").style.display = "none";
      document.getElementById("rock").style.border = 0;
      document.getElementById("paper").style.border = 0;
  }
}