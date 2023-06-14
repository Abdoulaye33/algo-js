const elementImportant = document.getElementsByClassName("important");

for (let i = 0; i < elementImportant.length; i++) {
    const element = elementImportant[i];
    element.setAttribute("title", "this is an important element");
}


const imgImportant = document.querySelectorAll("img");

