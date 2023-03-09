const setup = () => {
    const text = "De man van An geeft geen hand aan ambetante verwanten";
    const zoekwaarde = "an";
    let count = 0;

    index = text.lastIndexOf(zoekwaarde);
    while (index !== -1) {
        count++;
        index = text.lastIndexOf(zoekwaarde, index - 1);
    }

    console.log("an komt: " + count + " keer voor in " + text);

}
window.addEventListener("load", setup);