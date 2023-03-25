const setup = () => {
let paragraaf = document.querySelector("p#abc");
let elementNode = paragraaf.nodeName;
console.log(elementNode);

let kinderen = paragraaf.childNodes;

    console.log(kinderen[0].nodeValue);
    console.log(kinderen[1].firstChild.nodeValue);
    console.log(kinderen[2].nodeValue);
}
window.addEventListener("load", setup);