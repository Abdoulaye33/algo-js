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
