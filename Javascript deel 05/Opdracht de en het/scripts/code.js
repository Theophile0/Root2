const setup = () => {
    let vervangen = "Gisteren zat de jongen op de stap en at de helft van de appel"
    let woorden =  vervangen.split(" ");


    for (let i = 0; i < woorden.length; i++) {
        if(woorden[i] === "de"){
            woorden[i] = "het ";
        }
        else {
            woorden[i] += " ";
        }
        console.log(woorden.join(" "));
    }
}
window.addEventListener("load", setup);