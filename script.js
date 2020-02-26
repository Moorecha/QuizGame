let count = 0;
let numRight =0;
let correctOne;
let numQuestions = 4;
// Get Input
let btn1 =document.getElementById("btn0");
let btn2 =document.getElementById("btn1");
let btn3 =document.getElementById("btn2");
let btn4 =document.getElementById("btn3");

let createQuestion = function(questionText, choice0,choice1,choice2,choice3,correctChoice){
    btn1.innerText = choice0;
    btn2.innerText = choice1;
    btn3.innerText = choice2;
    btn4.innerText = choice3;
    correctOne = correctChoice;
};

let DoTheStuff = function(){
    btn1.onclick = function(){checkCorrect(this)};
    btn2.onclick = function(){checkCorrect(this)};
    btn3.onclick = function(){checkCorrect(this)};
    btn4.onclick = function(){checkCorrect(this)};
//outputs
if(count === 0){
    createQuestion("What is spongebob's pet named?", "Lary","Garrett","Grant","Gary", "Gary");
    correctOne = "Gary";
}else if(count === 1){
    createQuestion("What is spongebob?", "A starfish", "A sponge", "A human","A cat", "A sponge");
    correctOne = "A sponge";
}else if(count === 2){
    createQuestion("Where does Spongebob work?", "The pet store", "A warehouse","The Krusty Krab"," The gas station", "The Krusty Krab");
    correctOne = "The Krusty Krab";
}else{
    let question = document.getElementById("question");
    question.innerText = "You got" + numRight + " right out of " + numQuestions;
    document.getElementById("buttons").innerHTML = " ";
}
document.getElementById("progress").innerText = "Question" + (count + 1)+" of " + numQuestions;

};
let checkCorrect = function(button){
if(button === correctOne){
    numRight++;
}
count++;
DoTheStuff();
};