const setup = () => {
    let color  = document.getElementById("color");
    let slider = document.getElementsByClassName("slider");

    for (let i = 0; i <slider.length ; i++) {
        slider[i].addEventListener("change", update);
        slider[i].addEventListener("input", update);
    }
    update();

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
}



window.addEventListener("load", setup);