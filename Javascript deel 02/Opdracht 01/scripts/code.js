const setup = () => {
    window.confirm("Weet u het zeker");
    window.alert("I am a computervirus");
    window.prompt("Wat is uw naam", "onbekend");

    console.log(window.confirm("heel zeker?"));
    console.log(window.prompt("Druk op OK", "onbekend"));
    console.log(window.prompt("Druk op Cancel", "onbekend"));
}
window.addEventListener("load", setup);