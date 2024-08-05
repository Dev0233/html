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
let name=prompt("please enter you name. ");
// console.log(name ?? "you did'nt enter");
if(name){
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name);
}
else{
    console.log("you did'nt entered");
}