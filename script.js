
function changeImage(user_choice) {
  
  randomChoice(user_choice);
}

function randomChoice(user_choice) {
  var first_third = 100/3;
  var second_third = (100/3) * 2;

  var random_number = Math.floor((Math.random() * 100));
  if (random_number <= first_third) 
  {
    comp = "rock";
  }
  else if (random_number > first_third && random_number <= second_third)
  {
    comp = "paper";
  }
  else 
  {
    comp = "scissors";
  }
  game_result(user_choice, comp);
}

function game_result(user_choice, comp_choice) {
  document.getElementById("title").innerHTML="";
  document.getElementById("user_result").innerHTML="You chose " + user_choice + ".";
  document.getElementById("comp_result").innerHTML="The computer chose " + comp_choice + ".";

  if (user_choice == "rock") {
    document.getElementById("rock").style.margin= "0 auto";

    if (comp_choice == "rock") {
      document.getElementById("scissors").style.display = "none";
      document.getElementById("clickpaper").src = "image_source/rock.jpg";
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
    else if (comp_choice == "paper") {
      document.getElementById("scissors").style.display = "none";
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
    else if (comp_choice == "scissors") {
      document.getElementById("paper").style.display = "none";
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
  }

  else if (user_choice == "paper") {
    document.getElementById("paper").style.margin= "0 auto";

    if (comp_choice == "rock") {
      document.getElementById("clickrock").src= "image_source/paper.png";
      document.getElementById("clickpaper").src = "image_source/rock.jpg";
      document.getElementById("scissors").style.display = "none";
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
    else if (comp_choice == "paper") {
      document.getElementById("scissors").style.display = "none";
      document.getElementById("clickrock").src = "image_source/paper.png";
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
    else if (comp_choice == "scissors"){
      document.getElementById("rock").style.display = "none";
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
  }

  else if (user_choice == "scissors") {
    document.getElementById("scissors").style.margin= "0 auto";

    if (comp_choice == "rock") {
      document.getElementById("clickrock").src = "image_source/scissors.png";
      document.getElementById("clickscissors").src = "image_source/rock.jpg";
      document.getElementById("paper").style.display = "none";
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
    else if (comp_choice == "paper") {
      document.getElementById("clickpaper").src = "image_source/scissors.png";
      document.getElementById("clickscissors").src = "image_source/paper.png";
      document.getElementById("rock").style.display = "none";
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
    else if (comp_choice == "scissors") {
      document.getElementById("rock").style.display = "none";
      document.getElementById("clickpaper").src = "image_source/scissors.png";
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
  }
  document.getElementById("play_again").innerHTML="Play Again";
}

function reset() {
  location.reload();
}  

