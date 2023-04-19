const setup = () => {
    let jsonString ='{"naam":"student","voornaam":"student","geboortedatum":"11/01/2003","adres":{"straat":"studentstraat","stad":"Gent","nummer":101,"postcode":9000},"ouders":{"moeder":{"naam":"mama","geboortedatum":"11/03/1980"},"vader":{"naam":"papa","geboortedatum":"23/06/1978"}},"slaagpercentage":0.78}';
    let student = JSON.parse(jsonString);
    console.log(student.naam);
}
window.addEventListener("load", setup);