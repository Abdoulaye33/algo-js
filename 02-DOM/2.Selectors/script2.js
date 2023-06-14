const elementImportant = document.getElementsByClassName("important");

for (let i = 0; i < elementImportant.length; i++) {
    const element = elementImportant[i];
    element.setAttribute("title", "this is an important element");
};


const imgImportant = document.querySelectorAll("img");

    imgImportant.forEach(img => {
    if (img.classList.contains("important")) {
        img.style = "border: 20px dotted green;";
    } else {
        img.style.display = "none";
    }
    });


const parag = document.querySelectorAll("p");

parag.forEach(parag => {
    console.log("Contenu du paragraphe :", parag.textContent);
      
    if (parag.classList.length > 0) {
        console.log("Classe du paragraphe :", parag.classList);
    }
});
    