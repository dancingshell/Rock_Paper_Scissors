 
function changeImage(user_choice) {
  var user = ""
  var comp = ""
  if (user_choice == "rock") 
  {
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    document.getElementById("rock").style.margin= "0 auto";
    user = "rock";
    randomChoice(user_choice);
   } 
  else if (user_choice == "paper")  
  {
    document.getElementById("rock").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    document.getElementById("paper").style.margin= "0 auto";
    user = "paper";
    randomChoice(user_choice);
  }
  else if (user_choice == "scissors") 
  {
    document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.margin= "0 auto";
    user = "scissors";
    randomChoice(user_choice);
  }
  else{}
}

function randomChoice(user_choice) {
  var random_number = Math.floor((Math.random() * 100) + 1);
  alert(user_choice + "chose this!");
  if (random_number <= 33) 
  {
    comp = "rock";
  }
  else if (random_number > 33 && random_number <= 66)
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

  alert("You chose " + user_choice);
  alert("The computer chose " + comp_choice);
  if (user_choice == "rock") {

    if (comp_choice == "rock") {
      alert("You TIED :/")
    }
    else if (comp_choice == "paper") {
      alert("You LOST :(")
    }
    else if (comp_choice == "scissors") {
      alert("You WON :)")
    }
  }

  else if (user_choice == "paper") {
    if (comp_choice == "rock") {
      alert("You WON :)")
    }
    else if (comp_choice == "paper") {
      alert("You TIED :/")
    }
    else if (comp_choice == "scissors"){
      alert("You LOST :(")
    }
  }

  else if (user_choice == "scissors") {
    if (comp_choice == "rock") {
      alert("You LOST :(")
    }
    else if (comp_choice == "paper") {
      alert("You WON :)")
    }
    else if (comp_choice == "scissors") {
      alert("You TIED :/")
    }
  }
  
}



