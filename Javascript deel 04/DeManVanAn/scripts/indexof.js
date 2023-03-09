const setup = () => {
    const text = "De man van An geeft geen hand aan ambetante verwanten";
    const zoekwaarde = "an";
    let count = 0;

    let index = text.indexOf(zoekwaarde);
    while (index !== -1) {
        count++;
        index = text.indexOf(zoekwaarde, index + 1);
    }

    console.log("an komt: " + count + " keer voor in " + text);

}
window.addEventListener("load", setup);