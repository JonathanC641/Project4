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
const defiantComments = ["You don't scare me!", "Disgusting human!", "You dare kill me??!", "Human scum!", "You shall rue the day!", "I will never beg for mercy.", "I will come back to haunt you!", "I WILL LAY EGGS IN YOUR FOOD!!", "I look forward to haunting you, forever!"]; 
const mercyComments = ["Please, please no!", "Have mercy on me!", "Don't kill me!", "No! I have a family!", "I can leave, please don't hurt me!", "Noooo!", "I don't wanna go, please!", "MERCY!", "I'm innocent!", "I don't mean no harm!"]; 
const bug = 'bug.png'; 
const SPLATTED = 'splat.png'; 
let healthBar, healthValue, healthBarValue, currentBugCount, commentsUsed, barWidth, bugMessage; 

function initialize(){
    healthValue = document.getElementById("health");
    healthBar = document.querySelector('.status'); 
    commentsUsed = []; 
    barWidth = 100;
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
    console.log("I'm clicked!"); 
    let bugSplatted = document.getElementById(`bug${val}`); 
    if(bugSplatted.src !== SPLATTED){
        let resurrect = Math.random() === .1; 
        bugSplatted.src = SPLATTED;

        if(currentBugCount < 8 ){
            commentCheck(defiantComments);      
            if(resurrect){
                bugSplatted.src = bug;
            }else{
                currentBugCount-=1;
            }
        }else{
            commentCheck(mercyComments);      
            currentBugCount-=1;     
        }

    }
}

function commentCheck(commentArr){
    let used = true; 
    let comment; 
    while(used){
        let randIdx = parseInt(Math.random() * commentArr.length); 
        comment = commentArr[randIdx]; 
        if(!commentsUsed.includes(comment)){
            commentsUsed[commentsUsed.length] = comment;
            used = false; 
        }
    }
    bugMessage = document.getElementById("comment"); 
    bugMessage.innerHTML = comment; 
}

function healthCheck(){
    if(healthBarValue > 0){
        healthBarValue -= 10; 
        barWidth -= 10;
        healthValue.innerHTML = healthBarValue;
        healthBar.style.width = barWidth + "%"; 
    }else{
        console.log("Clear the screen, update message area to report the player lost. "); 
    }
}

function gameOver(){
   bugMessage.innerHTML = "You've splatted us all!"; 
}
    