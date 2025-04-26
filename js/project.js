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
    'media/thumbnails/img1.png',
    'media/thumbnails/img2.png',
    'media/thumbnails/img3.png',
    'media/thumbnails/img4.png',
    'media/thumbnails/img5.png',
    'media/thumbnails/img6.png',
    'media/thumbnails/img7.png',
    'media/thumbnails/img8.png'
];

const texts = [
    "Text1 🌸",
    "Text2 💖",
    "Text3 🌼",
    "text4 🌙",
    "text5 ✨",
    "text6 🌈",
    "text7 🧚‍♀",
    "text8 💌"
];

// Initialize audio
const audio = new Audio('media/audio/song.mp3');
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
