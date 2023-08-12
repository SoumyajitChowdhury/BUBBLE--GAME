let timer = 60;
let score = 0;
let hitrn = 0; 
function inctraseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function runTimer(){
    let timerint = setInterval(function(){
        if(timer>0){
            timer=timer-1;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtn").innerHTML = `<h1 id = "gameOver">GAME OVER </h1>`;
            document.querySelector("#gameOver").style.color = 'red';
            document.querySelector("#gameOver").style.fontSize = '100px';
        }
        
    },1000);
}

function makeBubble(){
    let clutter = "";

    for(let i = 1;i<=133;i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtn").innerHTML = clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}


document.querySelector("#pbtn").addEventListener("click", function(details){
    let clickedNnumber = Number(details.target.textContent);
    if(clickedNnumber === hitrn){
        inctraseScore();
        makeBubble();
        getNewHit();
    }
})


runTimer();
makeBubble();
getNewHit();
// inctraseScore();
