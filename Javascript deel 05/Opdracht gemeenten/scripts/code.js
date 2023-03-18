const setup = () => {
    const gemeenten = [];
    let stoppen = false;
    while (!stoppen) {
        const input = prompt("Geef een gemeente (stop om te stoppen):");
        if (input === "stop") {
            stoppen = true;
        }
        gemeenten.push(input);
    }

    gemeenten.sort();
    let select = "<select>";

    for (let i = 0; i < gemeenten.length -1; i++) {
        select += `<option value="${gemeenten[i]}">${gemeenten[i]}</option>`;
    }
    select += "</select>";

    document.write(select);

}
window.addEventListener("load", setup);