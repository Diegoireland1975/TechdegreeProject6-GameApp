const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#prhase");
const startBtn = document.querySelector(".btn__reset");
const overlay = document.querySelector("#overlay");
let scoreboard = document.querySelector("#scoreboard ol");
let missed = 0;
let phrases = [
  "Css is Awesome",
  "Javascript is not easy at the beginning",
  "I wanna be a Front End Developer",
  "You learn something new every day",
  "I love Coding Pizza and IceCream",
  "Javascript has the ability to fry my brain",
];

startBtn.addEventListener("click", () => {
  overlay.style.display = "none";

  addPhraseToDisplay(getRandomPhraseAsArray(phrases));
});

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
    const ul = document.querySelector("#phrase ul");
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

// add evenListener on Keyboard
qwerty.addEventListener("click", (e) => {
  if (e.target.tagName == "button") {
    e.target.classList.add("chosen");
    let button = event.target.textContent;
    let letterFound = checkLetter(button);
    if (letterFound === null) {
      missed += 1;
      heart = document.querySelector(".tries");
      scoreboard.removeChild(heart);
      e.target.disabled = true;
    }
  }
  checkWin();
});

function checkWin() {
  const letters = document.getElementsByClassName("letter");
  const shown = document.getElementsByClassName("show");
  if (letters.length == shown.length) {
    overlay.classList.add("win");
    title.textContent = "You Won";
    overlay.style.display = "flex";
  } else if (missed > 4) {
    overlay.classList.add("lose");
    title.textContent = "You are a looser!!!";
    overlay.style.display = "flex";
  }
}
