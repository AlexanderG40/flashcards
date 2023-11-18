// Create and Array of flashcards
const flashcards = [
    // This is the first flashcard object, which is the zero element in the array called flashcards
    { question: 'What is the capital of the US?', answer: 'Washington, D.C.' },
    //This is the second flash card object, which is the second element in the array of flashcards
    //with the index of 0
    { question: 'What is 2+2?', answer: '4' },
    { question: 'What is 10+1?', answer: '11' },
    { question: 'What is HTML?', answer: 'Hyper Text Markup Language' },
    { question: 'What is 10-9', answer: '1' },
    { question: 'What is 12+2', answer: '14' },

];

//Create a variable to store the current flashcard index
//The index is the position of the card in the array
let currentCard = 0;

//Create a function to update the flashcard content
function updateFlashCard(){
    //Get the current card object
    const card = document.getElementById('flashcard');
    //Check if the card is flipped
    // In case flipped means answer is showing
    // There are only two sides to a flash card
    //The question side and the other answer side
    if(card.classList.contains('flipped')){
        //If the card is flipped show answer
        card.textContent = flashcards[currentCard].answer; 
    }
    else {
        //If the card is not flipped show the question
        card.textContent = flashcards[currentCard].questions;
    }
}


//init first card
updateFlashCard();

//This is the event listener for the flashcard
document.getElementById('flashcard').addEventListener('click', function() {
    //Toggle the flipped class so the card flips
    this.classList.toggle('flipped');
    //Update the card content by calling the updateFlashCard
    updateFlashCard();
    
});

// Event listener for next button
document.getElementById('next').addEventListener('click', function() {
    //Increment the current card index
    currentCard = (currentCard + 1) % flashcards.length;
    // Get the flash card element
    const card = document.getElementById('flashcard');
    // Remove the flipped class from the card
    card.classList.remove('flipped');
    //Update the card content by calling the updateFlash card function
    updateFlashCard();
});