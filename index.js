
let player = 
{
    name : "Sai Kalyan Meghavath",
    chips : 100
}

let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";


let sum = 0;
let messageEl = document.getElementById("message-el");
let cardsEl = document.querySelector("#cards-el");
// let sumEl = document.getElementById("sum-el");
let sumEl= document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el");

console.log(cards);
function getRandomCard()
{
    let randomNumber = Math.floor((Math.random()*13))+1;
    if (randomNumber===1)
    {
        return 11;
    }
    else if(randomNumber>10 && randomNumber<14)
    {
        return 10;
    }
    else{
        return randomNumber;
    }
}

function startGame()
{
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards = [firstCard,secondCard];
    sum=firstCard + secondCard;
    isAlive = true;
    renderGame();
}
function renderGame()
{
    
    
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " ";
    } 
    if(sum<21)
    {
        message = "Do you want to draw a new card?";
    }
    else if(sum===21)
    {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }
    else
    {
        message="You're out of the game!";
        isAlive=false; 
    }
    console.log(message);
    messageEl.textContent=message;
}
function newCard()
{
    if(isAlive===true && hasBlackJack===false) 
    {
        console.log("Drawing a new card out!");
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        console.log(cards);
        renderGame();
    }
    
}

playerEl.textContent = player.name + ": $" + player.chips;