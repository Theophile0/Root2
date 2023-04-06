let global={
    IMAGE_COUNT: 5, //aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    geklikt: false
}

const setup = () => {
let start = document.getElementById("startButton");
    start.addEventListener("click", startSpel);

};

const startSpel = () => {
    let start = document.getElementById("startButton");
    let image = document.querySelector("img");

    image.addEventListener("click", geklikt);
    start.remove();
    global.timeoutId = setTimeout(volgendeRonde, global.MOVE_DELAY);
    changePosition();
    changeImage();
}
const geklikt = () => {
    global.geklikt = true;
    clearTimeout(global.timeoutId);
  if(isBom()){
      updateCounter(isBom());
  }
  else{
      updateCounter(isBom());
      volgendeRonde();
  }
  global.geklikt = false;
}

const isBom = () => {
    let image = document.querySelector('img');
    if(image.getAttribute("src") == global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX){
        return true;
    }
    else if(global.geklikt){
    }
}
const volgendeRonde = () => {
    clearTimeout(global.timeoutId);
  changeImage();
  changePosition();
  global.timeoutId = setTimeout(volgendeRonde, global.MOVE_DELAY);
}

const updateCounter = (gedaan) => {
    let span = document.querySelector('span');
    let text = "";
    span.firstChild.remove()
    global.score ++;
    if(!gedaan){
        text = document.createTextNode("Aantal hits: " + global.score);
    }
    else
    {
        text = document.createTextNode("Game over!! Score: " + --global.score);
        window.alert(text.nodeValue);
    }
    span.appendChild(text);
}
const changePosition = () => {
    let sprite = document.getElementsByTagName("img")[0];
    let speelveld = document.getElementById("playField");
    let maxLeft = speelveld.clientWidth -sprite.offsetWidth;
    let maxHeight = speelveld.clientHeight - sprite.offsetHeight;

    let left = Math.floor(Math.random()*maxLeft);
    let height = Math.floor(Math.random()*maxHeight);
    sprite.style.left = left + "px";
    sprite.style.top = height + "px";
}
const changeImage = () => {
    let image = document.getElementsByTagName("img")[0];
    let attrNr = (Math.random()*(global.IMAGE_COUNT-1))
    let path = global.IMAGE_PATH_PREFIX + Math.round(attrNr) + global.IMAGE_PATH_SUFFIX;
    image.setAttribute("src", path);
}
window.addEventListener("load", setup);


