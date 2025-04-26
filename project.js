// project.js

const photoPage = document.querySelector('.photo-page');
const frontPage = document.querySelector('.front-page');
const endPage = document.querySelector('.end-page');
const photo = document.getElementById('photo');
const photoText = document.getElementById('photo-text');
const emoji = document.getElementById('emoji');

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const endButton = document.getElementById('end-button');

let currentIndex = 0;

// Images and texts for each slide
const images = [
    'thumbnails/img1.png',
    'thumbnails/img2.png',
    'thumbnails/img3.png',
    'thumbnails/img4.png',
    'thumbnails/img5.png',
    'thumbnails/img6.png',
    'thumbnails/img7.png',
    'thumbnails/img8.png'
];

const texts = [
    "Here's some default lovely text for image 1 🌸",
    "This one is special... just like you 💖",
    "Smile :) it looks good on you 🌼",
    "A moment to remember forever 🌙",
    "Your vibe is unmatched, truly ✨",
    "Soft skies & sweet memories 🌈",
    "A little magic in every frame 🧚‍♀",
    "Thank you for being YOU 💌"
];

// Initialize audio
const audio = new Audio('audio/song.mp3');
audio.loop = true; // Loop the audio to keep playing

function startStory() {
    frontPage.classList.remove('active');
    photoPage.classList.add('active');
    currentIndex = 0;
    updatePhoto();
    audio.play();  // Play the song when starting the story
}

function nextPhoto() {
    currentIndex++;
    if (currentIndex < images.length) {
        updatePhoto();
    } else {
        photoPage.classList.remove('active');
        endPage.classList.add('active');
    }
}

function updatePhoto() {
    photo.src = images[currentIndex];
    photoText.innerText = texts[currentIndex];
    emoji.innerText = getEmoji(currentIndex);
}

function getEmoji(index) {
    const emojis = ['🌸✨', '🌼💕', '🌷💫', '💖🌟', '🌺✨', '🦋💖', '💐🌈', '🌹🎀'];
    return emojis[index]; // Update emoji for each photo
}

function restart() {
    endPage.classList.remove('active');
    frontPage.classList.add('active');
    audio.pause();  // Pause the audio when restarting
    audio.currentTime = 0;  // Reset the audio to the beginning
}

// Event listeners for buttons
startButton.addEventListener('click', startStory);
nextButton.addEventListener('click', nextPhoto);
endButton.addEventListener('click', restart);
