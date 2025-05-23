let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const drawGame =()=>{
    msg.innerText ="game  was draw !"
};

const showWinner=(userWin ,userChoice, compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText =`you win!your  ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor ="green";

}else{
    compScore++
    compScorePara.innerText= compScore;
    msg.innerText =`you lost ! ${userChoice} beats  your ${compChoice} `
     msg.style.backgroundColor ="red";
};
};

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice =", compChoice);
    if(userChoice === compChoice){
 drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //seciors ,paper
            userWin =compChoice ==="paper" ? false :true;
        } else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice ==="scissors" ? false :true;
        }else{
            //rock,paper
              userWin = compChoice ==="rock" ? false :true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}
);
