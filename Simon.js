// let powerbtn=document.querySelector("#startBtn");
// let green=document.querySelector("#green");
// let red=document.querySelector("#red");
// let blue=document.querySelector("#blue");
// let yellow=document.querySelector("#yellow");

// let score=document.querySelector("#score");
// let highscore=document.querySelector("#highscore");

// let scoreCount=document.querySelector("#score-count");
// let hscorecount=document.querySelector("#hscore-count");

// let heading=document.querySelector("#heading");

// let restart=document.querySelector("#restartBtn");
// let quit=document.querySelector("#quitBtn");
// hscorecount.innerHTML=0;


// let disp=[];
// let userCount = 0;
// let giveInput = false;
// let currInput = 0;

// function play(){
//     giveInput = false;
//     newVal=Math.floor(Math.random*4)+1;
//     disp.push(newVal);

//     let i=0;
//     while(i<disp.length){ //displaying colours
//         switch(disp[i]){
//             case 1:
//              setTimeout(()=>{green.style.backgroundColor="rgb(206, 249, 186)";},500);
//              setTimeout(()=>{green.style.backgroundColor="rgb(76, 232, 33)";},500);
//              break;

//             case 2:
//             setTimeout(()=>{red.style.backgroundColor="rgb(249, 208, 186)";},500);
//             setTimeout(()=>{red.style.backgroundColor="rgb(236, 83, 17)";},500);
//             break;

//             case 3:
//             setTimeout(()=>{blue.style.backgroundColor="rgb(200, 248, 250)";},500);
//             setTimeout(()=>{blue.style.backgroundColor="rgb(62, 186, 235)";},500);
//             break;
                    
//             case 4:
//             setTimeout(()=>{yellow.style.backgroundColor="rgb(248, 247, 206)";},500);
//             setTimeout(()=>{yellow.style.backgroundColor="yellow";},500);
//             break;    
//         }
//         i++;
//     }
//     giveInput = true;
//     userCount = 0;
// }


// powerbtn.addEventListener("click",()=>{
//     heading.style.visibility="hidden";
//     score.style.visibility="visible";
//     scoreCount.style.visibility="visible";
//     restart.style.visibility="visible";
//     quit.style.visibility="visible";
//     highscore.style.visibility="visible";
//     hscorecount.style.visibility="visible";
//     scoreCount.innerHTML=0;
//     play();
// });

// quit.addEventListener("click",()=>{
//     heading.style.visibility="visible";
//     scoreCount.innerHTML = 0;
//     score.style.visibility="hidden";
//     scoreCount.style.visibility="hidden";
//     restart.style.visibility="hidden";
//     quit.style.visibility="hidden";
//     highscore.style.visibility="hidden";
//     hscorecount.style.visibility="hidden";
// });

// restart.addEventListener("click",()=>{
//     scoreCount.innerHTML=0;
//     play();
//     // hscorecount.innerHTML=0;
// });


// green.addEventListener("click",()=>{
//     if(giveInput == true){
//         currInput = 1;
//         setTimeout(()=>{green.style.backgroundColor="rgb(206, 249, 186)";},2000);
//         setTimeout(()=>{green.style.backgroundColor="rgb(76, 232, 33)";},2000);
//         if(disp[userCount] == currInput){
//             userCount++;
//         }else{
//             giveInput = false;
//             heading.innerHTML = "Wrong Input";
//             heading.style.visibility = visible;
//         }
//         if(userCount == disp.length){ //all inputs are taken
//             giveInput = false;
//             play();
//         }
        
//     }
// });

// red.addEventListener("click",()=>{
//     if(giveInput == true){
//         currInput = 2;
//         setTimeout(()=>{red.style.backgroundColor="rgb(249, 208, 186)";},2000);
//         setTimeout(()=>{red.style.backgroundColor="rgb(236, 83, 17)";},2000);
//         if(disp[userCount] == currInput){
//             userCount++;
//         }else{
//             giveInput = false;
//             heading.innerHTML = "Wrong Input";
//             heading.style.visibility = visible;
//         }
//         if(userCount == disp.length){ //all inputs are taken //also when we have all correct inputs
//             giveInput = false;
//             play();
//             scoreCount++;
//             hscorecount = Math.max(scoreCount,hscorecount);
//         }
        
//     }
// });

// blue.addEventListener("click",()=>{
//     if(giveInput == true){
//         currInput = 3;
//         setTimeout(()=>{blue.style.backgroundColor="rgb(200, 248, 250)";},2000);
//         setTimeout(()=>{blue.style.backgroundColor="rgb(62, 186, 235)";},2000);
//         if(disp[userCount] == currInput){
//             userCount++;
//         }else{
//             giveInput = false;
//             heading.innerHTML = "Wrong Input";
//             heading.style.visibility = visible;
//         }
//         if(userCount == disp.length){ //all inputs are taken
//             giveInput = false;
//             play();
//         }
        
//     }
// });

// yellow.addEventListener("click",()=>{
//     if(giveInput == true){
//         currInput = 4;
//         setTimeout(()=>{yellow.style.backgroundColor="rgb(248, 247, 206)";},2000);
//         setTimeout(()=>{yellow.style.backgroundColor="yellow";},2000);
//         if(disp[userCount] == currInput){
//             userCount++;
//         }else{
//             giveInput = false;
//             heading.innerHTML = "Wrong Input";
//             heading.style.visibility = visible;
//         }
//         if(userCount == disp.length){ //all inputs are taken
//             giveInput = false;
//             play();
//         }
//     }
// });


// 1=green   2=red   3=blue  4=yellow


let gameseq=[];
let userseq=[];

let btns=["yellow","green","red","blue"];
let level=0;
let highscore=-1;
let started=false;
let h1=document.querySelector("h1");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;

    levelup();
    if(levelup){
        highscore++;
    }
    }
    
})


function levelup(){
userseq=[];
level++;

if(level > highscore){
    highscore=level
}

h1.innerHTML=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randCol=btns[randIdx];
let randBtn=document.querySelector(`.${randCol}`);

gameseq.push(randCol);
console.log(gameseq);
gameflash(randBtn);




}

function userflash(btn){
    btn.classList.add("userflash");
   
setTimeout(
    ()=>{btn.classList.remove("userflash")}
    ,250);   
}


function gameflash(btn){
    btn.classList.add("flash");
    
setTimeout(
    function(){btn.classList.remove("flash")},
    250);   
}


function checkAns(idx){

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
   
h1.innerHTML=`Wrong <br> Score : ${level}<br>  Highscore : ${highscore}.Press Any Key to`;
    document.querySelector("body").style.backgroundColor="red";
  
setTimeout(()=>{
    document.querySelector("body").style.backgroundColor="white"}
    ,150);
reset();
        }
    }


function reset(){
     gameseq=[];
     userseq=[];
     level=0;      
     started=false;
}



function btnpress(){
   let btn=this;
   userflash(btn);

   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   checkAns(userseq.length-1);
}


Allbtns=document.querySelectorAll(".btn");
for(butn of Allbtns){
butn.addEventListener("click",btnpress);
}



