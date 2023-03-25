const setup = () => {
let veranderlijke = document.querySelectorAll('p');
veranderlijke[0].remove();
let body = document.querySelectorAll('body');
let element = document.createElement('p');
element.appendChild(document.createTextNode("Good Job!"));
body[0].appendChild(element);
}
window.addEventListener("load", setup);