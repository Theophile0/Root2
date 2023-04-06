let global={
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    AANTAL_KAARTEN_GEDRAAID: 0,
    IMAGE_PATH_PREFIX: "pictures/kaart",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png"  // extensie van de figuren
}
const setup = () => {
    let kaarten = document.getElementById("kaarten");
    let aantalKaarten = global.AANTAL_KAARTEN*2 + 1;
    for (let i = 1; i < aantalKaarten; i++) {
        let element = document.createElement("div");
        element.setAttribute("class" , "kaart");
        element.setAttribute("id", i);
        let image = document.createElement("img");
        image.setAttribute("src", "pictures\\achterkant.png");
        image.setAttribute("alt", "memoryKaart");
        element.appendChild(image);
        element.addEventListener("click", kaartOmdraaien)
        kaarten.appendChild(element);
    }
}
const kaartOmdraaien = (e) => {
    let kaart = e.target;
  // if(global.AANTAL_KAARTEN_GEDRAAID <= 2){
      global.AANTAL_KAARTEN_GEDRAAID ++;
      if(kaart.getAttribute("src") === "pictures\\achterkant.png") {
        let nieuweSrc = global.IMAGE_PATH_PREFIX + kaart.parentNode.getAttribute("id") + global.IMAGE_PATH_SUFFIX;
        console.log(nieuweSrc);
          kaart.setAttribute("src", nieuweSrc);
      // }
  }
  else
  {
      kaart.setAttribute("src", "pictures\\achterkant.png");
  }
}
window.addEventListener("load", setup);