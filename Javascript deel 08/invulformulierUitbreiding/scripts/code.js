let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    if (valideer()) {
        // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
        let voornaam = document.getElementById("txtVoornaam").value;
        let familienaam = document.getElementById("txtFamilienaam").value;
        let geboortedatum = document.getElementById("txtGeboorteDatum").value;
        let email = document.getElementById("txtEmail").value;
        let aantalKinderen = document.getElementById("txtAantalKinderen").value;

        let persoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            geboortedatum: geboortedatum,
            email: email,
            aantalKinderen: aantalKinderen
        }
        if (nogGeenPersoon(persoon)) {
            persoon.index = personen.length;
            personen.push(persoon);
        }
        updatePersList()
        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    }
};

const nogGeenPersoon = (persoon) => {
    let bool = true;
    for (let i = 0; i < personen.length; i++) {
        if(personen[i]=== persoon){
            bool =  false;
        }
    }
    return bool;
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let voornaam = document.getElementById("txtVoornaam").value = "";
    let familienaam = document.getElementById("txtFamilienaam").value = "";
    let geboortedatum = document.getElementById("txtGeboorteDatum").value = "";
    let email = document.getElementById("txtEmail").value = "";
    let aantalKinderen = document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors();
    lstPersonen.selectedIndex = -1;
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const updatePersList = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(`${personen[i].voornaam} ${personen[i].familienaam}`));
        option.setAttribute('id', i);
        lstPersonen.appendChild(option);
    }
    lstPersonen.selectedIndex = personen.length -1;
}
const inladen = (e) => {
    let option = e.target;
    let id =  option.getAttribute("id");
    personen[id]
    document.getElementById("txtVoornaam").value = personen[id].voornaam;
    document.getElementById("txtFamilienaam").value = personen[id].familienaam;
    document.getElementById("txtGeboorteDatum").value = personen[id].geboortedatum;
    document.getElementById("txtEmail").value = personen[id].email;
    document.getElementById("txtAantalKinderen").value = personen[id].aantalKinderen;
    //valueverwijderen, en waarden uit personen in value van id steken.
}



// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    let lstPersonen = document.getElementById("lstPersonen");
   // for (let i = 0; i < lstPersonen.children.length; i++) {
        lstPersonen.addEventListener("select", bewaarBewerktePersoon);
    //}
};

window.addEventListener("load", setup);