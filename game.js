let userScore= 0;
let comScore= 0;
let userWin = true;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorenum = document.querySelector("#user-Score");
const comScorenum = document.querySelector("#comp-Score");

// generate computer choice
const generateCompchoice = () =>{
  const options = ["rock","paper","scissor"];
  const randomIdx = Math.floor(Math.random()*3);
  return options[randomIdx];
}
const drawGame =() =>{
    console.log("game was draw");
    msg.innerText = "Game was draw , play again";
    msg.style.backgroundColor ="blue";
}
const showWinner =(userWin, userChoice, comChoice) =>{
    if(userWin){
        userScore++;
        userScorenum.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor ="green";
        console.log("you win this game");
    }
    else{
        comScore++;
        comScorenum.innerText = comScore;
        msg.innerText = `You lose. ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
        console.log("computer win this game");
    }
}


const playGame = (userChoice) =>{
const comChoice = generateCompchoice();
console.log("computer choice=",comChoice);
if(userChoice === comChoice){
    drawGame();
    
}
else{
   
    if(userChoice === "rock"){
     userWin = comChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){

        userWin = comChoice === "scissor" ? false : true;
    }
    else{
        userWin = comChoice === "rock" ? false : true
    }
    showWinner(userWin, userChoice, comChoice);
}

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
     const userChoice = choice.getAttribute("id");
     console.log("user choice=",userChoice)
       playGame(userChoice);
    })


});