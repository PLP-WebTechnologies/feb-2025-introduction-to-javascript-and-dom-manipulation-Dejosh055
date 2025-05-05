
let sum = 0
let cardA = []
let hasAblackjack = false
 let isAlive = true
messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    name : "Joe",
    chips : 140
 }
 playerEl.textContent= player.name + " "+ "$ :"+ player.chips
function startGame(){
   let firstCard = randomNumber()
 let secondCard = randomNumber()
sum = firstCard + secondCard
 cardA = [firstCard , secondCard]                          
 message = ""
hasAblackjack = false
isAlive = true
    renderCard()
}
function renderCard(){
    if(sum <= 20){
       message = " Do you want to draw a card?"
    }
    else if( sum === 21){
       message = " You've gotten a blackjack"
       hasAblackjack = true
    }
    else{
       message = "You'er out of the game"
       isAlive = false
    }
    cardsEl.textContent = "Cards" 
    for (let index = 0; index < cardA.length; index++) {
        cardsEl.textContent = "Cards :" + cardA;
        
    }
    sumEl.textContent = "Sum :" + sum
    messageEl.textContent = message
    messageEl.style.color = "gold"
}
   function randomNumber(){
   let randomCard = Math.floor(Math.random()*13)+ 1
    cardsEl.textContent = randomCard
    if (randomCard > 10){
        return 10
    }
    else if(randomCard === 1){
        return 10
    }
    else{
        return randomCard
    }

   }
   
    
function newGame(){
    if(isAlive===true && hasAblackjack===false){
        randomNumber()
    }
    let card = randomNumber()
    sum += card
    renderCard()
    cardA.push(card)
    }


