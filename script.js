document.querySelector('.flip-btn').addEventListener('click', () => {
  const flashcards = document.querySelectorAll('.flashcard');
  flashcards.forEach(flashcard => {
    // Toggle the 'rotateY' transform property to flip the flashcard
    if (flashcard.style.transform === 'rotateY(180deg)') {
      flashcard.style.transform = 'rotateY(0deg)';
    } else {
      flashcard.style.transform = 'rotateY(180deg)';
    }
  });
});

let currentCardIndex = 0;
const flashcards = document.querySelectorAll('.flashcard');
const nextButton = document.querySelector('.next-btn');

nextButton.addEventListener('click', () => {
  flashcards[currentCardIndex].style.display = 'none'; // Hide current card
  currentCardIndex = (currentCardIndex + 1) % flashcards.length; // Move to the next card
  flashcards[currentCardIndex].style.display = 'block'; // Show next card
});

// Initially display the first card
flashcards.forEach((flashcard, index) => {
  if (index !== currentCardIndex) {
    flashcard.style.display = 'none'; // Hide all cards except the first
  }
});
