const setup = () => {

    let wijzig = document.getElementById("wijzig");

    wijzig.addEventListener("click", wijzigen)
}

const wijzigen = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);