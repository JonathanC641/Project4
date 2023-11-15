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
const defiantComments = ["You don't scare me!", "Disgusting human!", "You dare kill me??!", "Human scum!", "You shall rue the day!", "I will never beg for mercy."]; 
const mercyComments = ["Please, please no!", "Have mercy on me!", "Don't kill me!", "No! I have a family!", "I can leave, please don't hurt me!"]; 
const bug = 'bug.jpg'; 
const splatted = 'splat.jpg'; 
const commentsUsed = [];
let healthBar, healthValue, healthBarValue, currentBugCount, clicksToSplat, bugSplatted; 

function initialize(){
    messageArea = document.querySelector(".messageArea");
    // healthBar = document.querySelector();
    buttonGroup = document.getElementById("btnGrp");
    healthValue = document.getElementById("health");
    clicksToSplat = 1; 
    healthBarValue = startHealthBar; 
    currentBugCount = startingBugCount; 
}


function splat(){
    let willFightBack = parseInt(Math.random() * 10) + 1 <= 2; 

    if(willFightBack){
        healthCheck(); 
    }

    changeImage(); 
}

function changeImage(){
    let resurrect = parseInt(Math.random() * 10) + 1  === 1; 
    bugSplatted = document.getElementById("bug1"); 
    bugSplatted.src = splatted;
    if(resurrect){
        bugSplatted.src = bug; 
    }
     
    currentBugCount-=1; 
    if(currentBugCount >= 8){
        commentCheck(defiantComments);                  
    }else{
        commentCheck(mercyComments);           
    }
}

function commentCheck(commentArr){
    let used = true; 
    while(used){
        let randIdx = parseInt(Math.random() * commentArr.length) + 1; 
        let randomComment = commentArr[randIdx]; 
        if(!commentsUsed.includes(randomComment)){
            commentsUsed[commentsUsed.length] = randomComment;
            used = false; 
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

function updateMessageArea(){
    
}