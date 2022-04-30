const reviews = [{
        id: 1,
        name: "shawn",
        job: "doctor",
        img: "https://images.pexels.com/photos/11323431/pexels-photo-11323431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iusto! ",

    },
    {
        id: 2,
        name: "suzan",
        job: "nurse",
        img: "pexels-photo-1.jpeg",
        text: "you guys are unbelievable! Facere atque et cum? Delectus exercitationem.",

    },
    {
        id: 3,
        name: "billie",
        job: "scientist",
        img: "pexels-photo-2.jpeg",
        text: "ipsum dolor sit amet isicing elit. Facere atque et cum? Delectus exercitationem aut ullam quasi",

    },
    {
        id: 4,
        name: "farzad",
        job: "dentist",
        img: "pexels-photo-3.jpeg",
        text: " sit amet isicing elit. Facere atque et cum? Delectus exercitationem aut ullam quasi",

    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    ShowPerson(currentItem);
});

function ShowPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    ShowPerson(currentItem);
});
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    ShowPerson(currentItem);

});

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    ShowPerson(currentItem);
});