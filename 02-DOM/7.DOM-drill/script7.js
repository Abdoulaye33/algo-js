document.addEventListener('DOMContentLoaded', function() {
    const ul = document.querySelector('ul');
    const children = ul.childNodes;
    
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      
      if (child.nodeType === 1) {
        if (child.textContent.includes('Fast and Furious') && i !== 0) {
          ul.insertBefore(child, ul.firstChild);
        }
        
        child.classList.add('important');
        child.addEventListener('click', function() {
          if (this.textContent === 'Fast and Furious') {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about cars, it's about family.");
          } else {
            alert(this.textContent);
          }
        });
      }
    }
    
    const uniqueFranchises = [];
    const lis = ul.getElementsByTagName('li');
    
    for (let i = lis.length - 1; i >= 0; i--) {
      const li = lis[i];
      
      if (uniqueFranchises.includes(li.textContent)) {
        ul.removeChild(li);
      } else {
        uniqueFranchises.push(li.textContent);
      }
    }
    
    document.body.addEventListener('keyup', function(event) {
      if (event.key === 'r') {
        const franchises = Array.from(ul.children);
        franchises.sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < franchises.length; i++) {
          const franchise = franchises[i];
          
          if (franchise.textContent === 'Fast and Furious') {
            ul.insertBefore(franchise, ul.firstChild);
            break;
          }
        }
      } else if (event.key === 'd') {
        const fastAndFurious = document.querySelector('.important');
        const clone = fastAndFurious.cloneNode(true);
        ul.insertBefore(clone, ul.firstChild);
      }
    });
    
    const div = document.createElement('div');
    const select = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    
    option1.textContent = 'important franchises';
    option2.textContent = 'normal franchises';
    
    select.appendChild(option1);
    select.appendChild(option2);
    div.appendChild(select);
    document.body.insertBefore(div, ul);
    
    select.addEventListener('change', function() {
      const selectedOption = select.options[select.selectedIndex].textContent;
      
      for (let i = 0; i < lis.length; i++) {
        const li = lis[i];
        
        if (selectedOption === 'important franchises') {
          if (li.classList.contains('important')) {
            li.style.visibility = 'visible';
          } else {
            li.style.visibility = 'hidden';
          }
        } else {
          li.style.visibility = 'visible';
        }
      }
    });
  });
  