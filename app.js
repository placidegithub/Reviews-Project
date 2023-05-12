const reviews = [
    {
        id: 1,
        name: "Henry",
        job: "hacker",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I am so kind to the others",
    },

    {
        id: 2,
        name: "Placide",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg",
        text: "Impossible is nothing",
    },

    {
        id: 3,
        name: "Official",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-3_ipa0mj.jpg",
        text: "that is who you are",
    },

    {
        id: 4,
        name: "Onlooker",
        job: "Richerman",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-4_t9nxjt.jpg",
        text: "Never give up ma nigger",
    },

];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});

