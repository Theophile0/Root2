const setup = () => {
    let div = document.querySelectorAll('div');
    let newElement = document.createElement('p');
    newElement.appendChild(document.createTextNode("Some text"));
    div[0].appendChild(newElement);
}
window.addEventListener("load", setup);