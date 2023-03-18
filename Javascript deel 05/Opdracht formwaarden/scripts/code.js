const setup = () => {
    let resultaat = document.getElementById("resultaat");
    resultaat.addEventListener("click", print);
}
const print = () => {
  let roker = document.getElementById("roker").checked;
  let moedertaal = document.querySelector('input[name="moedertaal"]:checked').value
  let buurlandOptions = document.getElementById("buurland").options;
  let buurland = document.getElementById("buurland").selectedIndex;
  let bestelling = document.getElementById("bestelling");
  let bestellingWaarden = Array.from(bestelling.selectedOptions);
  let print = "";

  if(roker){
      print += "is een roker\n";
  }
  else{
      print += "is geen roker\n";
  }
  print += "moedertaal is " + moedertaal + "\n";
  print += "favoriete buurland is " + buurlandOptions[buurland].value +"\n";
  print += "bestelling bestaat uit ";
    for (let i = 0; i < bestellingWaarden.length; i++) {
        print += bestellingWaarden[i].value + " ";
    }
  console.log(print);
}
window.addEventListener("load", setup);