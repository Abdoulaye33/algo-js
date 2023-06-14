const learners = [
  "Abdoulaye",
  "Adeline",
  "Bathsheba",
  "Camille",
  "Cedric",
  "Clara",
  "Corentin",
  "Ilias",
  "Jason",
  "Jérôme",
  "Julien",
  "Lucie",
  "Manon",
  "Marius",
  "Nathan",
  "Nicolas",
  "Ozlem",
  "Pauline",
  "Pietro",
  "Rui",
  "Sam",
  "Sarah",
  "Steeve",
  "Tim",
  "Youssef",
];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const article = document.querySelector("article");

shuffleArray(learners);

learners.forEach((learner) => {
  const section = document.createElement("section");

  const backgroundColor = getRandomColor();

  section.style.backgroundColor = backgroundColor;

  const nameParag = document.createElement("p");
  nameParag.textContent = learner;

  section.appendChild(nameParag);
  article.appendChild(section);
});

function shuffleArray(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());
}

// this a function i dont know if it work but i will check it later
function getTextColor(background_color) {
    // Extract the red, green, and blue values from the background color
    var red = background_color[0];
    var green = background_color[1];
    var blue = background_color[2];
  
    // Calculate the relative luminance using the formula specified in WCAG
    var luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  
    // Determine the appropriate text color based on luminance
    if (luminance > 0.5) {
      return 'black'; // Light background, use black text
    } else {
      return 'white'; // Dark background, use white text
    }
  }
  var background_color = [255, 255, 255]; // Example: white background
var text_color = getTextColor(background_color);
console.log(text_color); // Output: 'black'

var background_color = [0, 0, 0]; // Example: black background
var text_color = getTextColor(background_color);
console.log(text_color); // Output: 'white'

  