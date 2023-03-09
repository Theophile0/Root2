const setup = () => {
    let button = document.getElementById("spaties");

    button.addEventListener("click",metSpaties)
}
const metSpaties = () => {
  let spaties = "";
    let tekst = document.getElementById("tekst");
    for (let i = 0; i < tekst.value.length; i++) {
        spaties+= tekst.value.charAt(i) + " ";
    }
    console.log(spaties);
}
window.addEventListener("load", setup);