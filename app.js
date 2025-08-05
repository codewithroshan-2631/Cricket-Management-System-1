let slides = document.querySelectorAll(".championReview");
let cards = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let contentBox = document.querySelector(".content");
let detailBox = document.querySelector(".detail");

let count = 0;

// Position each slide
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function showSlides() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}

setInterval(() => {
  count++;
  if (count === slides.length) {
    count = 0;
  }
  showSlides();
}, 2000);

// Data for each player
const playerData = {
  virat: {
    name: "Virat Kohli",
    desc: "Virat Kohli (born 5 November 1988) is an Indian international cricketer..."
  },
  rohit: {
    name: "Rohit Sharma",
    desc: "Rohit Sharma (born 30 April 1987) is an Indian cricketer..."
  },
  dhoni: {
    name: "MS Dhoni",
    desc: "Mahendra Singh Dhoni is an Indian professional cricketer..."
  },
  abd: {
    name: "AB de Villiers",
    desc: "AB de Villiers is a former South African cricketer..."
  },
  head: {
    name: "Travis Head",
    desc: "Travis Head is an Australian international cricketer..."
  },
  steve: {
    name: "Steve Smith",
    desc: "Steve Smith is an Australian cricketer and former captain..."
  },
  sachin: {
    name: "Sachin Tendulkar",
    desc: "Sachin Tendulkar is a former Indian international cricketer..."
  },
  jonny: {
    name: "Jonny Bairstow",
    desc: "Jonny Bairstow is an English cricketer who plays all formats..."
  },
  babar: {
    name: "Babar Azam",
    desc: "Babar Azam is a Pakistani international cricketer and former captain..."
  },
  inglis: {
    name: "Josh Inglis",
    desc: "Josh Inglis is an Australian cricketer and wicket-keeper..."
  },
  sodi: {
    name: "Ish Sodhi",
    desc: "Ish Sodhi is a New Zealand cricketer known for his leg-spin bowling..."
  },
  devid: {
    name: "David Warner",
    desc: "David Warner is an Australian cricketer and aggressive opener..."
  }
};


function showInfo(playerKey) {
  const player = playerData[playerKey];
  if (!player) return;

  const card = document.querySelector(`.card[onclick="showInfo('${playerKey}')"]`);
  const imgSrc = card.querySelector("img").src;

  detailBox.style.display = "block";
  contentBox.innerHTML = `
    <img src="${imgSrc}" alt="${player.name}">
    <div class="contentText">
      <h1>${player.name}</h1>
      <p>${player.desc}</p>
    </div>
  `;
}
closeBtn.addEventListener("click", () => {
  detailBox.style.display = "none";
});


