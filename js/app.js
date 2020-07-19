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

// listen for the start game button to be pressed then display random phrase
startBtn.addEventListener("click", () => {
  overlay.style.display = "none";

  addPhraseToDisplay(getRandomPhraseAsArray(phrases));
});

// get a random phrase from the phrases array
function getRandomPhraseAsArray(array) {
  //random number based on length of array
  let randomNum = Math.floor(Math.random() * Math.floor(array.length));
  let randomPhrase = array[randomNum];
  console.log(randomPhrase);
  return randomPhrase;
}

getRandomPhraseAsArray(phrases);

// ADD PHRASE TO DISPLAY - LOOP & CREATE ELEMENTS
function addPhraseToDisplay(arr) {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i];
    const ul = document.querySelector("#phrase ul");
    li.textContent = arr[i];
    ul.appendChild(li);
    if (arr[i] !== " ") {
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
    if (letters[i].textContent.toLowerCase() === button) {
      letters[i].classList.add("show");
      match = letters[i].textContent;
    }
  }
  return match;
}

// add evenListener on Keyboard
qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.classList.add("chosen");
    let button = e.target.textContent;
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
  const letters = document.querySelectorAll(".letter");
  const shown = document.querySelectorAll(".show");
  let title = document.querySelector(".title");
  if (letters.length == shown.length) {
    overlay.classList.add("win");
    overlay.textContent = "Congratulations You Win!!!!";
    overlay.style.display = "flex";
  } else if (missed > 4) {
    overlay.classList.add("lose");
    overlay.textContent = "You are a looser!!!";
    overlay.style.display = "flex";
  }
}
