let h2 = document.querySelector("h2");
let boxes= document.querySelectorAll(".box");

gameseq=[];
userseq=[];
let started=false;
let level=0;
btns=["red","yellow","green","purple"];

document.addEventListener("keypress",function () {
           if(started==false){
            console.log("Game started");
            started=true;

            levelup();
           }
});

function flashbtn(btn){
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);

    gameseq.push(randomColor);
    console.log(gameseq);

    flashbtn(randomBtn);
}

function checkAns(idx) {
    if(gameseq[idx]==userseq[idx]){
       if(gameseq.length==userseq.length){
            levelup();
       }
    }else{
      h2.innerHTML=`Game Over ! <b>Your Score is : ${level}</b> <br>Press any key.<br>`;  
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function() {
         document.querySelector("body").style.backgroundColor="white";
      },150);

       reset();
    }

}

function pressbtn(){
    let btn =this;
    flashbtn(btn);

   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   console.log(usercolor);

   checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click",pressbtn);
}

function reset() {
      gameseq=[];
      userseq=[];
      started=false;
       level=0; 
}

