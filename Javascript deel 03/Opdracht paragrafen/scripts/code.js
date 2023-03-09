const setup = () => {
    let paragraaf = document.getElementsByClassName("belangrijk");

    for (let i = 0; i < paragraaf.length; i++) {
        paragraaf[i].className = "belangrijk opvallend";
    }

}
window.addEventListener("load", setup);