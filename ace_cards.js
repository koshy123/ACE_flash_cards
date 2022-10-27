
//My total score 
let totalScore = 0;




allQuestions = [
    "Pumps blood in body",
    "You use to hear",
    "You use to see",
    "You use to taste",
    "Largest organ in body",
]

allanswers = [
    "heart",
    "ear",
    "eye",
    "tongue",
    "skin",
]
 
//let submit = document.createElement("");  // This is creating a button node 
let submitText = document.createTextNode("Memorize")  // This is creating a text but not stored anywhere
let tom = document.querySelector('#name');
let button = document.querySelector('#button');
let show = document.querySelector('.showQuestion');

let currentQuestion = 0;

for(let i = 0; i<allQuestions.length; i++){
    let currentQuestion = allQuestions[i]
   // console.log(currentQuestion)
     show.innerHTML = currentQuestion

     button.addEventListener('click', function (evt){
    evt.preventDefault()
    for(let i=0; i < allanswers.length; i++){
    let text = tom.value;
    if(text === allanswers[currentQuestion]){
    totalScore ++
    currentQuestion ++
}}
    console.log(totalScore)
});


}


