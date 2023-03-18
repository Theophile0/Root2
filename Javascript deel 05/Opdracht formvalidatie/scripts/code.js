const setup = () => {
    let valideert = document.getElementById("btnValideer")
    valideert.addEventListener("click", valideer)
}

const valideer = () => {
    if(valideerVoornaam() && valideerFamilienaam() && valideerGeboortedatum() && valideerEmail() && valideerAantalKinderen()) {
        window.alert("Proficiat!");
    }
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("naam");
    let voornaam = txtVoornaam.value.trim();
    let errMessage = document.getElementById("errorMessage");

    if (voornaam.length > 30) {
        reportError(txtVoornaam, errMessage, "Max. 30 karakters")
    } else {
        clearError(txtVoornaam, errMessage);
        return true;
    }
};

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("familienaam")
    let familienaam = txtFamilienaam.value.trim();
    let errMessage = document.getElementById("errorFamilienaam")

    if (familienaam !== "") {
        clearError(txtFamilienaam, errMessage)
        if (familienaam.length > 50) {
            reportError(txtFamilienaam, errMessage, "Max. 50 karakters");
        } else {
            clearError(txtFamilienaam, errMessage);
            return true;
        }
    } else {
        reportError(txtFamilienaam, errMessage, "Verplicht veld");
    }
}


const valideerEmail = () => {
    let txtEmail = document.getElementById("email");
    let email = txtEmail.value.trim();
    let errMessage = document.getElementById("errorMail");

    if (email !== "") {
        clearError(txtEmail, errMessage);
        if (!validEmail(email)) {
            reportError(txtEmail, errMessage, "Geen geldig email adres");
        } else {
            clearError(txtEmail, errMessage);
            return true;
        }
    } else {
        reportError(txtEmail, errMessage, "Verplicht veld");
    }
}

const validEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const valideerGeboortedatum = () => {
    let geboortetxt = document.getElementById("geboortedatum");
    let geboortedatum = geboortetxt.value.trim();
    let errMessage = document.getElementById("errGeboorte");

    if (geboortedatum !== "") {
        clearError(geboortetxt, errMessage)
        if (!isValidDateFormat(geboortedatum)) {
            reportError(geboortetxt, errMessage, "Formaat is niet jjjj-mm-dd");
        } else {
            clearError(geboortetxt, errMessage);
            return true;
        }
    } else {
        reportError(geboortetxt, errMessage, "Verplicht veld");
    }
}

const isValidDateFormat = (date) => {
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    let isValidDateFormat = dateRegex.test(date);

    let jaar = date.slice(0, 4);
    let maand = date.slice(5, 7);
    let dag = date.slice(8, 10);

    if (isValidDateFormat && isGetal(jaar) && isGetal(maand) && isGetal(dag)) {
        return true;
    } else {
        return false;
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const valideerAantalKinderen = () => {
  let aantaltxt = document.getElementById("aantalKinderen");
  let aantal = aantaltxt.value.trim();
  let errMessage = document.getElementById("errAantalKinderen");

  if(!isGetal(aantal) || aantal < 0 ){
      reportError(aantaltxt, errMessage, "Is geen positief getal");
  }
  else if (aantal > 99){
      reportError(aantaltxt, errMessage, "Is te vruchtbaar");
  }
  else{
      clearError(aantaltxt, errMessage);
      return true;
  }
}

const reportError = (element, errElement, message) => {
    element.className = "invalid";
    errElement.innerHTML = message;
};

const clearError = (element, errElement) => {
    element.className = "";
    errElement.innerHTML = "";
    element.classList.remove('MyClass');
};

window.addEventListener("load", setup);