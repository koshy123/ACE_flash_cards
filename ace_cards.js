console.log("hi");


let submit = document.createElement("");  // This is creating a button node 
let submitText = document.createTextNode("Memorize")  // This is creating a text but not stored anywhere
let tom = document.querySelector(".name"); 

submit.addEventListener('click', enterAnswer)



function newCard(event) {
    event.preventDefault()
    tom.innerHTML = " ";
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
    


