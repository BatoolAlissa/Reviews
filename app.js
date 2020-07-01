const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptatum est consequatur ipsum reiciendis, reprehenderit, maxime dolor quaerat pariatur labore magni esse, obcaecati suscipit velit. Iusto mollitia eum sunt ipsam",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iure ex ipsa id illum. Magni ab distinctio provident repellat nam tenetur doloremque reprehenderit ipsam quibusdam magnam hic debitis corrupti id odio obcaecati nisi libero facilis, culpa voluptas nostrum veritatis quae!"
},
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptatum est consequatur ipsum reiciendis, reprehenderit, maxime dolor quaerat pariatur labore magni esse, obcaecati suscipit velit. Iusto mollitia eum sunt ipsam",
},
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi nobis odit nulla voluptas quia laudantium illo culpa! Officiis at unde repellat officia tenetur! Quibusdam, fugit. Vel aliquam illum dignissimos, ipsum porro quo nulla in?"
},
];

// select each item
const img = document.getElementById("person-img");
const name = document.getElementById("person-name");
const job = document.getElementById("person-job");
const text = document.getElementById("person-review");

//start review
let currentReview = 0;

//select a button
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".random");

//initial load
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentReview);
});

// show person based on item
function showPerson(person) {
  const item = reviews[currentReview];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showPerson(currentReview);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showPerson(currentReview);
});

// show random person

randomBtn.addEventListener('click',function(){
    currentReview = Math.floor(Math.random()* reviews.length)
    showPerson(currentReview)
})

