const setup = () => {
    let herbereken = document.getElementById("herbereken");
    herbereken.addEventListener("click", bereken);
}
const bereken = () => {
  let prijslijst = document.getElementsByClassName("prijs");
  let aantallen = document.getElementsByTagName("input");
  let btwPercentages = document.getElementsByClassName("btw");
  let subtotaal = document.getElementsByClassName("subtotaal");
  let totaal = document.getElementById("totaal");

    for (let i = 0; i < prijslijst.length; i++) {
        if(parseInt(prijslijst[i].value, 10) !== 0) {
            console.log(prijslijst[i].value);
            let abc = prijslijst[i].value;
            console.log(abc.valueOf());
            console.log(Number(parseInt(prijslijst[i].value)));
            console.log(aantallen[i].value);
            let sub = parseInt([i].value, 10) + aantallen[i].value + btwPercentages[i].value;
            console.log(sub);
            subtotaal[i].innerHTML = sub.toString() + " Eur";

        }
    }
}
window.addEventListener("load", setup);