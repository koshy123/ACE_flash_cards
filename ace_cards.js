
//My total score 
let totalScore = 0;




let allQuestions = [
    "Pumps blood throughout body",
    "You use this organ to hear sounds",
    "You use this organ to see",
    "You use this organ to taste",
    "Largest organ of your body",
    "This covers the top of your head",
    "Organs that performs breathing function",
    "Organ that controls your whole body",
    "Cleans bloodstream from inpurities",
    "Part of the body that you use to eat and talk",
    
]

let allAnswers = [
    "heart",
    "ear",
    "eye",
    "tongue",
    "skin",
    "hair",
    "lungs",
    "brain",
    "kidney",
    "mouth",
]
 
let text = '';

let textBox = document.querySelector('.input');
let button = document.querySelector('#button');
let show = document.querySelector('.showQuestion');
let score = document.querySelector('.totalScore');
let questionHere = document.querySelector('.questionHere');


let currentQuestion = 0;
fillQuestion = allQuestions[currentQuestion]

questionHere.innerHTML = fillQuestion
fillAnwser = allAnswers[currentQuestion]
show.innerHTML = fillAnwser



     button.addEventListener('click', checkInput)


     function checkInput(evt){
        evt.preventDefault()

        text = textBox.value
        console.log(allAnswers[currentQuestion])


        
       console.log(fillQuestion)

        if(text === allAnswers[currentQuestion] ){
            console.log("right anwser")
            totalScore = totalScore + 1
            currentQuestion = currentQuestion + 1 
            fillQuestion = allQuestions[currentQuestion]
            fillAnwser = allAnswers[currentQuestion]
            show.innerHTML = fillAnwser
            questionHere.innerHTML = fillQuestion
        }
          console.log(totalScore)
          score.innerHTML = "Total Score " + totalScore;
     }

   


