//example code
const container = document.querySelector('#container');
let content = document.createElement('div');

content.classList.add('content');
content.textContent = 'glorious content thingie!';

container.appendChild(content);

//a <p> with red text that says “Hey I’m red!”
let paragraph = document.createElement('p');
paragraph.setAttribute('style','color: red;')
paragraph.textContent = "Hey I'm red!";

container.appendChild(paragraph);

//an <h3> with blue text that says “I’m a blue h3!”
let heading3 = document.createElement('h3')

heading3.setAttribute('style', 'color:blue;');
heading3.textContent = "I'm a blue h3";

container.appendChild(heading3);

//a <div> with a black border and pink background color with the following elements inside of it:
const div2 = document.createElement('div');
div2.setAttribute('style','border-style: solid; border-color:black; background-color:pink;');

//another <h1> that says “I’m in a div”
let h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div2.appendChild(h1);

//a <p> that says “ME TOO!”
paragraph = document.createElement('p');
paragraph.textContent = "ME TOO!";
div2.appendChild(paragraph);

//Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
container.appendChild(div2);
