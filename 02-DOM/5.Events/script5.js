const _initTime = Date.now()

const logs = document.querySelector("ul")
console.log(logs)
const containersSquareAdded = document.querySelector(".displayedsquare-wrapper")
console.log(containersSquareAdded)
const actionsquares = document.querySelectorAll('.actionsquare')
console.log(actionsquares)


for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

for (let i = 0; i < containersSquareAdded.children.length; i++) {
  containersSquareAdded.children[i].addEventListener('click', clickOnAddedSquare)
}
 
document.querySelector("body").addEventListener('keypress', (event) => {
  if (event.code === "Space") {
    document.querySelector("body").style.backgroundColor = "rgb(" + randomNum(0, 255) + ", " + randomNum(0, 255) + ", " + randomNum(0, 255) + ")"
  } else if (event.code === "KeyL") {
    const squares = document.querySelectorAll(".displayedsquare")
    for (let element of squares) {
      element.remove()
    }
  } else if (event.code === "KeyS") {
    const list = document.querySelectorAll("li")
    for (let element of list) {
      element.remove()
    }
  }
})

function randomNum(min, max) {
  return parseInt(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  let newChild = document.createElement("div")
  newChild.classList.add("displayedsquare")
  newChild.classList.add(e.target.classList[1])
  containersSquareAdded.appendChild(newChild)
  
  let newField = document.createElement("li")
  newField.textContent = "[" + getElapsedTime() + "] Created a new " + e.target.classList[1] + " square"
  logs.appendChild(newField)
}

function clickOnAddedSquare(e) {
  console.log(e)
  alert(e.target.classList[1])
}