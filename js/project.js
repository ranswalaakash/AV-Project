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
    'media/thumbnails/img1.jpg',
    'media/thumbnails/img2.jpg',
    'media/thumbnails/img3.jpg',
    'media/thumbnails/img4.jpg',
    'media/thumbnails/img5.jpg',
    'media/thumbnails/img6.jpg',
    'media/thumbnails/img7.jpg',
    'media/thumbnails/img8.jpg',
    'media/thumbnails/img9.jpg',
    'media/thumbnails/img10.jpg',
    'media/thumbnails/img11.jpg',
    'media/thumbnails/img12.jpg',
    'media/thumbnails/img13.jpg'
];

const texts = [
    "Where it all began 🤍🌟",
    "The sweet, happy girl that I have met, who fills every moment with joy and warmth. 😊💖",
    "A girl whose presence makes me feel at peace and truly happy. 💫🌸",
    "Adventures are best with you, always 👫🌍",
    "The coolest girl I know 🌸😎",
    "You’re the sunshine, filling everything with warmth, and I’m the moon boy, offering calm and light.🌞🌙",
    "Your smile is a curve of magic, a radiant art, a spark that ignites the heart, and I am the one who adores that smile. 🧚‍♀✨",
    "You were the gossip girl, and I was always the one who loved listening 💌👂",
    "You have a beautiful grasping mind, and I love being the one who teaches you💌📚",
    "You were a blessing in disguise, and I was the one who found it.💌🌟",
    "You want people to read the you within, and I am the one who understands it💌🧠",
    "I could have the whole world, but without you, it would all feel empty. You are the only piece that makes it complete💌🌍💖",
    "Still missing, still loving, still watching, still caring but all in silence. 💭💔"
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
    // Add fade-out effect first
    photo.classList.remove('fade-in');
    void photo.offsetWidth; // trick to restart animation
    photo.src = images[currentIndex];
    photoText.innerText = texts[currentIndex];
    emoji.innerText = getEmoji(currentIndex);
    photo.classList.add('fade-in'); // Add fade-in effect

    createHearts(); // create hearts on every next
}


function createHearts() {
    for (let i = 0; i < 8; i++) {  // 6 hearts at once
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 90 + "%";
        heart.style.animationDuration = (2 + Math.random()) + "s"; // random duration
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // remove after 3 sec
    }
}



function getEmoji(index) {
    const emojis = [
        '🌸✨',
        '🌼💕',
        '🌷💫',
        '💖🌟',
        '🌺✨',
        '🦋💖',
        '💐🌈',
        '🌹🎀',
        '🌻💌',
        '🌟💌',
        '🌙💖',
        '💫🌍',
        '🌙🌒'
    ];
    
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
