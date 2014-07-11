 function changeRock() {
  if (document.getElementById("clickrock").src = "image_source/rock.jpg") 
  {
      document.getElementById("paper").style.display = "none";
      document.getElementById("scissors").style.display = "none";
      document.getElementById("rock").style.margin="0 auto";
  }
}

function changePaper() {
  if (document.getElementById("clickpaper").src = "image_source/paper.png") 
  {
      document.getElementById("rock").style.display = "none";
      document.getElementById("scissors").style.display = "none";
      document.getElementById("paper").style.margin="0 auto";
  }
}

function changeScissors() {
  if (document.getElementById("clickscissors").src = "image_source/scissors.png") 
  {
      document.getElementById("rock").style.display = "none";
      document.getElementById("paper").style.display = "none";
      document.getElementById("scissors").style.margin="0 auto";
  }
}

// var imgObj = null;
// var animate ;
// function init(){
//    imgObj = document.getElementById('clickrock');
//    imgObj.style.position= 'relative'; 
//    imgObj.style.left = '0px'; 
// }
// function moveRight(){
//    imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
//    animate = setTimeout(moveRight,20); // call moveRight in 20msec
// }