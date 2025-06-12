let userscore=0;
let compscore=0;

let choice = document.querySelectorAll(".rok");
let h3 = document.querySelector("h3");
let us=document.querySelector("#us");
let cs=document.querySelector("#cs");





let compch = () => {
    let obj=["rock","paper","scissor"];
    let idx= Math.floor(Math.random()*3);
    return obj[idx];
} 

showWinner = (userwin) => {

    if(userwin) {
        userscore++;
        us.innerText=userscore;
        console.log("you win");
        h3.innerText="you win";
    } else {
        compscore++;
        cs.innerText=compscore;
        console.log("you lose");
        h3.innerText="you lose";
    }

}


let playGame = (uc) => {

    console.log("user choice",uc);
    let cc=compch();
    console.log("comp choice",cc);

    if(uc==cc) {
        console.log("game draw");
        h3.innerText="game draw / play agaian";
    }else {
        let userwin=true;
        if(uc==="rock") {
               //cc=paper,scissor
            userwin=cc==="paper"?false:true;
        } else if(uc==="paper") {
               //cc=rock,paper
            userwin=cc==="rock"?true:false;  

        } else {
             //cc=rock,paper
            userwin=cc=="paper"?true:false;
        } 
        showWinner(userwin);
    }
}
choice.forEach((choice) => {
      choice.addEventListener("click",() => {
        let uc=choice.getAttribute("id");
    
        playGame(uc); 
      })
})

