
function changeImage(user_choice) {

  if (user_choice == "rock") 
  {
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    document.getElementById("rock").style.margin= "0 auto";
    randomChoice(user_choice);
   } 
  else if (user_choice == "paper")  
  {
    document.getElementById("rock").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    document.getElementById("paper").style.margin= "0 auto";
    randomChoice(user_choice);
  }
  else if (user_choice == "scissors") 
  {
    document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.margin= "0 auto";
    randomChoice(user_choice);
  }
  else{}
}

function randomChoice(user_choice) {
  var first_third = 100/3
  var second_third = (100/3) * 2

  var random_number = Math.floor((Math.random() * 100));
  if (random_number <= first_third) 
  {
    comp = "rock";
  }
  else if (random_number > first_third && random_number <= second_third )
  {
    comp = "paper";
  }
  else 
  {
    comp = "scissors";
  }
  game(user_choice, comp);
}

function game(user_choice, comp_choice) {
  document.getElementById("user_result").innerHTML="You chose " + user_choice + ".";
  document.getElementById("comp_result").innerHTML="The computer chose " + comp_choice + ".";

  if (user_choice == "rock") {

    if (comp_choice == "rock") {
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
    else if (comp_choice == "paper") {
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
    else if (comp_choice == "scissors") {
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
  }

  else if (user_choice == "paper") {
    if (comp_choice == "rock") {
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
    else if (comp_choice == "paper") {
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
    else if (comp_choice == "scissors"){
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
  }

  else if (user_choice == "scissors") {
    if (comp_choice == "rock") {
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
    else if (comp_choice == "paper") {
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
    else if (comp_choice == "scissors") {
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
  }
  document.getElementById("play_again").innerHTML="Play Again";
}

function reset() {
  location.reload();
}  



