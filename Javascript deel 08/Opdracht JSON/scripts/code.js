const setup = () => {
    let student1 = {
        naam: "student",
        voornaam : "student",
        geboortedatum: "11/01/2003",
        adres: {
            straat: "studentstraat",
            stad: "Gent",
            nummer: 101,
            postcode: 9000
        },
        ouders: {
            moeder:{
                naam: "mama",
                geboortedatum: "11/03/1980"
            },
            vader:{
                naam: "papa",
                geboortedatum: "23/06/1978"
            }
        },
        slaagpercentage: 0.78
    }
    let student = JSON.stringify(student1);
    console.log(student);
}
window.addEventListener("load", setup);