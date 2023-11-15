/*While there are still at least 8 bugs left on screen, the bugs will be defiant
Below 8, beg for mercy
No comment should ever be used twice during a single execution of the page.
Randomize comments 
After each splat, there is a 10% chance that one of the dead bugs will return.
After the last bug is splatted, the screen will change to show a big picture of a scary bug. 
Give the bugs a fighting chance. After each splat, they attack back. There is a 2% percent chance, per bug, that the user will be wounded (User Health Bar)
Each time the user is wounded, it takes an extra click to splat a bug (Hit counter for the user)
*/
const startingBugCount = 15; 
const startHealthBar = 100;
const defiantComments = []; 
const mercyComments = []; 
const bug = 'bug.jpg'; 
const splatted = 'splat.jpg'; 
const commentsUsed = [];
let healthBar, healthBarValue, currentBugCount, clicksToSplat, bugSplatted; 

function initialize(){
    bugSplatted = document.getElementById("bug1"); 
    messageArea = document.querySelector(".messageArea");
    // healthBar = document.querySelector();
    healthValue = document.getElementById("health");
    clicksToSplat = 1; 
    healthBarValue = startHealthBar; 
    currentBugCount = startingBugCount; 
}

function splat(){
    let willFightBack = parseInt(Math.random() * 10) + 1; 

    if(willFightBack){
        healthCheck(); 
    }

    changeImage(); 
}

function changeImage(){
    bugSplatted.src = splatted; 
    currentBugCount-=1; 
    let used = true; 
    if(currentBugCount >= 8){
        while(used){
            let randIdx = parseInt(Math.random() * defiantComments.length) + 1; 
            let randomComment = defiantComments[randIdx]; 
            if(!commentsUsed.includes(randomComment)){
                commentsUsed+= randomComment;
            }
        }                   
    }else{
        while(used){
            let randIdx = parseInt(Math.random() * mercyComments.length) + 1; 
            let randomComment = mercyComments[randIdx]; 
            if(!commentsUsed.includes(randomComment)){
                commentsUsed+= randomComment;
            }
        }            
    }
}

function healthCheck(){
    if(healthBarValue > 0){
        healthBarValue -= 10; 
        healthValue.innerHTML = healthBarValue;
    }else{
        console.log("Clear the screen, update message area to report the player lost. "); 
    }
}

function updateMessageArea(){}