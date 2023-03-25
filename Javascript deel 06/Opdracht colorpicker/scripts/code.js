const setup = () => {
    let color  = document.getElementById("color");
    let slider = document.getElementsByClassName("slider");
    let button = document.getElementById('save');

    for (let i = 0; i <slider.length ; i++) {
        slider[i].addEventListener("change", update);
        slider[i].addEventListener("input", update);
    }

    update();
    button.addEventListener("click", opslaan);
    color.style.backgroundColor="rgb(0,0,0)"

}
const update = () => {
    let slider = document.getElementsByClassName("slider");
    let tekst = document.getElementsByClassName("tekst");
    let color  = document.getElementById("color");
    let values = []
    for(i = 0; i<slider.length;i++){
        tekst[i].innerText = slider[i].value
    }
    for (let i = 0; i < slider.length; i++) {
        values.push(slider[i].value);
    }
    let rgb = `rgb(${values[0]}, ${values[1]}, ${values[2]})`
    color.style.backgroundColor=rgb;
    return rgb;
}

const opslaan = () => {
    console.log("inmetohde");
  let opgeslagen = document.createElement('div');
  let verwijder = document.createElement('input');
  let body = document.querySelector('body');

  opgeslagen.className = "opgeslagen";

    opgeslagen.style.backgroundColor=update();

  verwijder.setAttribute('type', "button");
  verwijder.setAttribute('value', 'X');
  verwijder.className = 'verwijder';

  opgeslagen.appendChild(verwijder);
    body.appendChild(opgeslagen);
    verwijder.addEventListener("click", verwijderOpgeslagen);
}

const verwijderOpgeslagen = (e) => {
    e.currentTarget.parentNode.remove();
}

window.addEventListener("load", setup);