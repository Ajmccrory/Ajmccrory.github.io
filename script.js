// Change love message dynamically
const messages = [
    "I love you more every day",
    "You make my life brighter",
    "I’m so lucky to have you",
    "You mean the world to me"
];

const messageEl = document.getElementById("love-message");
const changeBtn = document.getElementById("changeMessageBtn");

changeBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageEl.textContent = messages[randomIndex];
});

// Add new reasons dynamically
const reasons = [
    "Your laugh is my favorite sound",
    "You're incredibly thoughtful",
    "You make everything fun",
    "You're beautiful inside and out",
    "You make me try new things",
    "You make everyday more fun",
    "You always make my outlook on things better"
];

const addReasonBtn = document.getElementById("addReasonBtn");
const reasonsList = document.getElementById("reasonsList");
addReasonBtn.addEventListener("click", () => {
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

    const existing = Array.from(reasonsList.children).map(li => li.textContent);

    if (!existing.includes(randomReason)) {
        const li = document.createElement("li");
        li.textContent = randomReason;
        reasonsList.appendChild(li);
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = Math.random();
    heart.style.pointerEvents = "none";
    heart.style.animation = "floatUp 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}


const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    to {
        transform: translateY(-100vh);
        opacity: 0;
    }
}`;

const startDate = new Date("2026-03-27"); 

function updateLoveCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("loveCounter").textContent =
        `${days} days and ${hours} hours ❤️`;
}

setInterval(updateLoveCounter, 1000);
updateLoveCounter();

const music = document.getElementById("bgMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
document.head.appendChild(style);
const phoebeImage = document.getElementById("phoebeImage");

const images = [
    "pheebs_pics/Phoebe.jpeg",
    "pheebs_pics/Phoebe1.jpeg",
    "pheebs_pics/Phoebe2.jpeg",
    "pheebs_piccs/Phoebe3.jpeg",
    "pheebs_pics/Phoebe4.jpeg"
];

let lastIndex = 0;

phoebeImage.addEventListener("click", () => {
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === lastIndex);

    lastIndex = newIndex;
    phoebeImage.src = images[newIndex];
});
