const setup = () => {
let lijst = document.querySelectorAll("li");

    for (let i = 0; i < lijst.length; i++) {
        lijst[i].className = 'listitem';
    }

    let img = document.createElement("img");
    img.setAttribute('src', "pictures/phonepicutres-TA.webp");
    document.querySelectorAll('body')[0].appendChild(img);
}
window.addEventListener("load", setup);