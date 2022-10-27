console.log("hi");


//let submit = document.createElement("");  // This is creating a button node 
let submitText = document.createTextNode("Memorize")  // This is creating a text but not stored anywhere

let tom = document.querySelector('#name');
tom.addEventListener('keyup', function(){
    let text = tom.value;
    if(text === "hi"){
    console.log('New text is "' + text + '"');
  }});



/*
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




// Need object to store the questions and anwsers

let questions = {
    question1: "What is the largest bone in the body",
    question2: "What organ pumps blood",
    question3: "What is the largest organ"
}
    

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





  //https://stackoverflow.com/questions/14542062/eventlistener-enter-key