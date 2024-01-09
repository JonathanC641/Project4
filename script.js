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
const defiantComments = ["You don't scare me!", "Disgusting human!", "You dare kill me??!", "Human scum!", "You shall rue the day!", "I will never beg for mercy.", "I will come back to haunt you!", "I WILL LAY EGGS IN YOUR FOOD!!", ""]; 
const mercyComments = ["Please, please no!", "Have mercy on me!", "Don't kill me!", "No! I have a family!", "I can leave, please don't hurt me!"]; 
const bug = 'bug.jpg'; 
const SPLATTED = 'splat.jpg'; 
const commentsUsed = [];
let healthBar, healthValue, healthBarValue, currentBugCount, clicksToSplat; 

function initialize(){
    messageArea = document.querySelector(".messageArea");
    healthValue = document.getElementById("health");
    clicksToSplat = 1; 
    healthBarValue = startHealthBar; 
    currentBugCount = startingBugCount; 
}


function splat(val){
    let willFightBack = Math.random() <= .2; 

    if(willFightBack){
        healthCheck(); 
    }

    changeImage(val); 
}

function changeImage(val){
    let bugSplatted = document.getElementById(`bug${val}`); 
    if(bugSplatted.src !== SPLATTED){
        let resurrect = Math.random() === .1; 
        bugSplatted.src = SPLATTED;

        if(resurrect){
            bugSplatted.src = bug; 
            bugSpeech(); 
        }else{
            currentBugCount-=1; 
        }
        if(currentBugCount >= 8){
            commentCheck(defiantComments);                  
        }else{
            commentCheck(mercyComments);           
        }
    }
}

function commentCheck(commentArr){
    let used = true; 
    let comment; 
    while(used){
        let randIdx = parseInt(Math.random() * commentArr.length) + 1; 
        comment = commentArr[randIdx]; 
        if(!commentsUsed.includes(comment)){
            commentsUsed[commentsUsed.length] = comment;
            used = false; 
        }
    }
    let bugMessage = document.getElementById("comment"); 
    bugMessage.innerHTML = comment; 
}

function healthCheck(){
    if(healthBarValue > 0){
        healthBarValue -= 10; 
        healthValue.innerHTML = healthBarValue;
    }else{
        console.log("Clear the screen, update message area to report the player lost. "); 
    }
}

function bugSpeech(){

}