/* Example given on TOP website
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
*/

const container = document.querySelector('#container');

// Adding a <p> with red text that says "Hey I'm red!"
let paragraph = document.createElement('p');
paragraph.style.cssText = 'color: red;';
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

// Adding a <h3> with blue text that says "I'm a blue h3!"
let h3 = document.createElement('h3');
h3.style.cssText = 'color: blue;';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

// Adding a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”, and a <p> that says “ME TOO!”
let div = document.createElement('div');
let h1 = document.createElement('h1');
paragraph = document.createElement('p');
div.style.cssText = 'border: solid; background-color: pink;';
h1.textContent = "I'm in a div!";
paragraph.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(paragraph);
container.appendChild(div);