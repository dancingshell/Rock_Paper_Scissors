function randomChoice(user_choice) {
  var first_third = 100/3;
  var second_third = (100/3) * 2;
  var comp;

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

function test(string){
  document.getElementById("title").innerHTML="this is a " +string;
}

var string1= "squiggle";
var string2= "butt";
var string3= "  .  ";
var string4= "   . ";
var string5= "    .";
// var string6= "test";





function game_result(user_choice, comp_choice) {
  document.getElementById("clickuser").style.display="initial";
  document.getElementById("clickcomp").style.display="initial";
  setTimeout(test(string1), 3000);
  setTimeout(test(string2), 3000);
  setTimeout(test(string3), 3000);
  setTimeout(test(string4), 3000);
  setTimeout(test(string5), 3000);
  // setTimeout(test(string6), 3000);
  // document.getElementById("title").innerHTML="And the winner is...";
  document.getElementById("rock").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("scissors").style.display = "none";
  document.getElementById("user_result").innerHTML="You chose " + user_choice + ".";
  document.getElementById("comp_result").innerHTML="The computer chose " + comp_choice + ".";
  

  if (user_choice == "rock") {
    document.getElementById("clickuser").src = "image_source/rock.jpg";  
    if (comp_choice == "rock") {
      document.getElementById("clickcomp").src = "image_source/rock.jpg";
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
    else if (comp_choice == "paper") {
      document.getElementById("clickcomp").src = "image_source/paper.png";
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
    else if (comp_choice == "scissors") {
      document.getElementById("clickcomp").src = "image_source/scissors.png";
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
  }

  else if (user_choice == "paper") {
    document.getElementById("clickuser").src = "image_source/paper.png";  
    if (comp_choice == "rock") {
      document.getElementById("clickcomp").src = "image_source/rock.jpg";
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
    else if (comp_choice == "paper") {
      document.getElementById("clickcomp").src = "image_source/paper.png";
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
    else if (comp_choice == "scissors"){
      document.getElementById("clickcomp").src = "image_source/scissors.png";
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
  }

  else if (user_choice == "scissors") {
    document.getElementById("clickuser").src = "image_source/scissors.png";  

    if (comp_choice == "rock") {
      document.getElementById("clickcomp").src = "image_source/rock.jpg";
      document.getElementById("final_result").innerHTML="You LOST :(";
    }
    else if (comp_choice == "paper") {
      document.getElementById("clickcomp").src = "image_source/paper.png";
      document.getElementById("final_result").innerHTML="You WON! :)";
    }
    else if (comp_choice == "scissors") {
      document.getElementById("clickcomp").src = "image_source/scissors.png";
      document.getElementById("final_result").innerHTML="You TIED :/";
    }
  }
  document.getElementById("play_again").innerHTML="Play Again";
}

function reset() {
  location.reload();
}  

