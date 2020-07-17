const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#prhase");
const startBtn = document.querySelector(".btn__reset");
const overlay = document.querySelector("#overlay");
let scoreboard = document.querySelector("#scoreboard ol");
let missed = 0;
const phrases = [
  "Css is Awesome",
  "Javascript is not easy at the beginning",
  "I wanna be a Front End Developer",
  "You learn something new every day",
  "I love Coding Pizza and IceCream",
];

const win = document.createElement("h3");
win.textContent = "You win Congratulations";

const lose = document.createElement("h3");
lose.textContent = "You are a Looser!!!";

startBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Math.floor(Math.random() * 5 + 1);
function getRandomPhraseAsArray(array) {
  //random number based on length of array
  let randomNum = Math.floor(Math.random() * Math.floor(array.length));
  let randomPhrase = array[randomNum];
  console.log(randomPhrase);
  return randomPhrase;
}

const splitRandomPhrase = getRandomPhraseAsArray(phrases);

// ADD PHRASE TO DISPLAY - LOOP & CREATE ELEMENTS
function addPhraseToDisplay(arr) {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    const li = document.createElement("li");
    const ul = document.getElementById("phrase ul");
    li.textContent = letter;
    ul.appendChild(li);
    if (letter !== " ") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
  }
}

// CHECK LETTER FUNCTION
function checkLetter(button) {
  const letters = document.getElementsByClassName("letter");
  let match = null;
  for (let i = 0; i < letters.length; i++) {
    if (letter.textContent === button) {
      letter.classList.add("show");
      match = button.textContent;
    }
  }
  return match;
}
