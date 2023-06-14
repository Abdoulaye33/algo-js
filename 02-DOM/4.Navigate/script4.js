const ol = document.querySelector("ol");

const firstChild = ol.children[0];

const lastChild = ol.children[4];

ol.insertBefore(lastChild, firstChild);


const thirdSection = document.getElementById("third");

const h2Third = thirdSection.children[1];

const secondSection = document.getElementById("second");

const h2Second = secondSection.children[0];

h2Third.appendChild(h2Second);