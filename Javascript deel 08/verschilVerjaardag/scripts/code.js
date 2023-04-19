const setup = () => {
    let verjaardag = new Date(2004,9,1);
    let vandaag = new Date();
    let verschilInMilliseconds = vandaag - verjaardag;
    let verschilInDagen = verschilInMilliseconds/1000/60/60/24;
    console.log(parseInt(Math.floor(verschilInDagen)));
}
window.addEventListener("load", setup);