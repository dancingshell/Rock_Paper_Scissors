 function changeImage() {

  if (document.getElementById("clickrock").src = "image_source/rock.jpg") 
  {
      document.getElementById("clickpaper").src = "";
      document.getElementById("clickscissors").src = "";
      document.getElementById("paper").style.border = 0;
      document.getElementById("scissors").style.border = 0
  }
  else if (document.getElementById("clickpaper").src = "image_source/paper.png") 
  {
      document.getElementById("clickrock").src = "";
      document.getElementById("clickscissors").src = "";
      document.getElementById("rock").style.border = 0;
      document.getElementById("scissors").style.border = 0;
  }
  else if (document.getElementById("clickscissors").src = "image_source/scissors.png") 
  {
      document.getElementById("clickrock").src = "";
      document.getElementById("clickpaper").src = "";
      document.getElementById("rock").style.border = 0;
      document.getElementById("paper").style.border = 0;
  }
 
}