// const myNumber=43;
// const myFloat=43.09;
// const myString="32.456fgh"
// console.log(Number(myFloat)==myNumber);
// console.log(Number.parseFloat(myString).toFixed(2))
// let x=10;
// let z;
// let y=z ? "yes" : "No";
// console.log(y)
// let x="stone"
// let f="paper"
// let result=
//     x===f
//     ? "tie"
//     : x==="stone" && f==="paper"
//     ? "f wins"
//     : "x wins";
// console.log(result);
// events or popups
// alert("hello world");
// let myBoolean =confirm("ok=== True\nCancel === False");
// console.log(myBoolean)
// let name=prompt("please enter you name. ");
// // console.log(name ?? "you did'nt enter");
// if(name){
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name);
// }
// else{
//     console.log("you did'nt entered");
// }
let playgame=confirm("we shall play rock paper scissor ?");
if(playgame){
    let playerchoice = prompt("please enter rock , paper or scissor" );
    if (playerchoice){
        let playerone=playerchoice.trim().toLocaleLowerCase();
        if(playerone==="rock"||playerone==="paper" || playerone==="scissor"){
            let computerChoice=Math.floor(Math.random()*3+1);
            let computer;
            switch(computerChoice){
                case 1:
                     computer ="rock";
                     break;
                case 2:
                        computer ="paper";
                        break;
    
                default :
                        computer=" scissor";
                        break;
            }
            let result=
                computer===playerone
                ? "draw"
                : playerone === "rock" && computer === "paper"
                    ? `playerone: ${playerone}\ncomputer: ${computer}\ncomputer wins!`
                : playerone === "rock" && computer === "scissors"
                    ? `playerone: ${playerone}\ncomputer: ${computer}\nplayerone wins!`
                : playerone === "paper" && computer === "rock"
                    ? `playerone: ${playerone}\ncomputer: ${computer}\nplayerone wins!`
                : playerone === "paper" && computer === "scissors"
                    ? `playerone: ${playerone}\ncomputer: ${computer}\ncomputer wins!`
                : playerone === "scissors" && computer === "rock"
                    ? `playerone: ${playerone}\ncomputer: ${computer}\ncomputer wins!`
                : playerone === "scissors" && computer === "paper"
                    ? `playerone: ${playerone}\ncomputer: ${computer}\nplayerone wins!`
                : "Invalid input";
                alert(result);
                let playagain=confirm("play again ?");
                playagain ? location.reload():alert("ok thanks!!");

                }
                else{
                    alert("you did'nt enter options");}
                }
                else{
                    alert("i guess you changed your mind may be next time");
                }
            }
            else{
                alert("ok !! it's fine");
            }
