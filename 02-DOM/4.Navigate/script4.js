const ol = document.querySelector("ol");

const firstChild = ol.children[0];

const lastChild = ol.children[4];

ol.insertBefore(lastChild, firstChild);


// Get the elements to be manipulated
const secondSection = document.getElementById('second');
const thirdSection = document.getElementById('third');

// Get the <h2> elements within the sections
const secondSectionHeading = secondSection.querySelector('h2');
const thirdSectionHeading = thirdSection.querySelector('h2');

// Swap the text content of the <h2> elements
const tempText = secondSectionHeading.textContent;
secondSectionHeading.textContent = thirdSectionHeading.textContent;
thirdSectionHeading.textContent = tempText;

// Move the second section to the location of the third section
thirdSection.insertAdjacentElement('beforebegin', secondSection);

// Remove the last section from the DOM
thirdSection.remove();
