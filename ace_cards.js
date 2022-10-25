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
           
           //Need to fix up this line so that the results in the console will desiplay on page
          // let tom = document.querySelector("#results").createTextNode(res.forms[0]["name"])
        }       //Only able to get one name to appear on screen right now. Need to get it to run though all parts
    })
    .catch(err => { console.log("something went wrong...", err) })    
}

