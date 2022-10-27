ACE - PseuDo Code
In the html, I want to have the title and other titles so the playe can easily identify the cards
The player will insert an anwser into a box and the computer will keep score

I will hardcode the the questions and anwsers into the code, which will be in object form in javascript
Then the first div will be able to ask questions on random.
I will have 20 questions to start . Using a math.floor to return a random number to return a question.

THe question will link to multiple anwser choices.
If the anwser matches, then the screen will let the user know that it was right .
Then the score will go up by one.

He it reaches a score of 10. The player wins 




/*
tom.addEventListener('submit', function (e) {
    console.log(data[currentQuestion].answer)
    let text = tom.value;
    if (e.key === 'Enter') {
        console.log('Enter')
        console.log(text)
            
            //for(let i= 0; i < data.length; i++)
            if(text === data[currentQuestion].answer)
            console.log("right")
    }
});




/*
tom.addEventListener('keyup', function(){
   // tom.addEventListener()
    for(let i = 0; i < data.length; i++)
    {
        if(text === data[i].question1);
       // console.log("hi")
    }  });
*/




  /*
let myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];




function newCard(event) {
    event.preventDefault()
    input.innerHTML = " ";
    fetch('', { })
    .then(res => { return res })
    .then(res => { 
        let card = res.results; 
        for(let i = 0; i < newCard.length; i++){
           const card = document.createElement("div");
           tom.appendChild(newCard)
           newArea.innerText =  card[i].name + ", "
        }    
    })
    .catch(err => { console.log("something went wrong...", err) })    
}








  
  let quizContainer = document.getElementById('quiz');
  let resultsContainer = document.getElementById('results');
  let submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      let output = [];
      let answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      let answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      let userAnswer = '';
      let numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }


*/


  //https://stackoverflow.com/questions/14542062/eventlistener-enter-key



// Need object to store the questions and anwsers
/*
const data = 
[
{question: "Pumps blood in body",
answer: "heart"}
,


{
question: "You use to hear",
answer: "ear"}
,


{question: "You use to see",
answer: "eye"}
,


{question: "You use to taste",
answer: "tongue"}
,


{question: "Largest organ in body",
answer: "skin"}
]
*/