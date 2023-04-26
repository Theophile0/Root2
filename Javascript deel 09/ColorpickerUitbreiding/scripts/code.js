let global ={
    rood: 0,
    groen: 0,
    blauw: 0,
    lijst:[]
};
const setup = () => {
    let color  = document.getElementById("color");
    let slider = document.getElementsByClassName("slider");
    let button = document.getElementById('save');

    for (let i = 0; i <slider.length ; i++) {
        slider[i].addEventListener("change", update);
        slider[i].addEventListener("input", update);
    }
    color.style.backgroundColor="rgb(0,0,0)"

    slider[0].value = localStorage.getItem("Rood");
    slider[1].value = localStorage.getItem("Groen");
    slider[2].value = localStorage.getItem("Blauw");

    update();
    button.addEventListener("click", opslaan);
    if(localStorage.getItem('global') !== null) {
        global = JSON.parse(localStorage.getItem('global'));
        console.log(global);
    }
    inladenVakjes();
    schrijfWegNaarLocalStorage();
    //alle opgeslagen inladen

}
const schrijfWegNaarLocalStorage = () => {
    let tekst = JSON.stringify(global);
    localStorage.setItem('global', tekst);
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
    global.rood = values[0];
    localStorage.setItem('Rood', global.rood);
    global.groen = values[1];
    localStorage.setItem('Groen', global.groen);
    global.blauw = values[2];
    localStorage.setItem('Blauw', global.blauw);

    let rgb = `rgb(${values[0]}, ${values[1]}, ${values[2]})`
    color.style.backgroundColor = rgb;

    return rgb;
}

const opslaan = () => {
  let opgeslagen = document.createElement('div');
  let verwijder = document.createElement('input');
  let body = document.querySelector('body');

  opgeslagen.className = "opgeslagen";

  opgeslagen.style.backgroundColor=update();

  global.lijst.push(update());
  schrijfWegNaarLocalStorage();

  verwijder.setAttribute('type', "button");
  verwijder.setAttribute('value', 'X');
  verwijder.className = 'verwijder';

  opgeslagen.appendChild(verwijder);
    body.appendChild(opgeslagen);
    verwijder.addEventListener("click", verwijderOpgeslagen);
}

const verwijderOpgeslagen = (e) => {
    let kleur = e.currentTarget.parentNode.style.backgroundColor.replaceAll(" ", "");

    let teller = 0;
    let gevonden = false
    while(!gevonden && teller < global.lijst.length){
        if(global.lijst[teller].replaceAll(" ", "") === kleur){
            global.lijst.splice(teller, 1);
            schrijfWegNaarLocalStorage();
        }
        teller++;
    }
    e.currentTarget.parentNode.remove();
}
const inladenVakjes = () => {
    //console.log(global.lijst.length);
    for (let i = 0; i < global.lijst.length; i++) {
        let opgeslagen = document.createElement('div');
        let verwijder = document.createElement('input');
        let body = document.querySelector('body');

        opgeslagen.className = "opgeslagen";
        opgeslagen.setAttribute('data', i);

        opgeslagen.style.backgroundColor= global.lijst[i];

        verwijder.setAttribute('type', "button");
        verwijder.setAttribute('value', 'X');
        verwijder.className = 'verwijder';

        opgeslagen.appendChild(verwijder);
        body.appendChild(opgeslagen);
        verwijder.addEventListener("click", verwijderOpgeslagen);
    }
}

window.addEventListener("load", setup);