
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
 
let text = '';

let textBox = document.querySelector('.input');
let button = document.querySelector('#button');
let show = document.querySelector('.showQuestion');
let score = document.querySelector('.totalScore');

let currentQuestion = 0;


   //fillQuestion = allQuestions[currentQuestion]
    //show.innerHTML = fillQuestion
   //console.log(fillQuestion)

     button.addEventListener('click', checkInput)


     function checkInput(evt){
        evt.preventDefault()
        console.log(textBox.value)
        text = textBox.value
        console.log(allanswers[currentQuestion])

        fillQuestion = allQuestions[currentQuestion]
        show.innerHTML = fillQuestion
       console.log(fillQuestion)

        if(text === allanswers[currentQuestion] ){
            console.log("right anwser")
            totalScore = totalScore + 1
            currentQuestion = currentQuestion + 1 
            fillQuestion = allQuestions[currentQuestion]
            show.innerHTML = fillQuestion
            
        }
          console.log(totalScore)
          score.innerHTML = "Total Score" + totalScore

     }

   


/*
    button.addEventListener('click', function (evt){
    evt.preventDefault()
    text = textBox.value
    if(text === allanswers[currentQuestion]){
    totalScore ++
    
    console.log(currentQuestion)
    }
});
console.log(totalScore)
*/

